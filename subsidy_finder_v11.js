// ========== 실시간 데이터 자동 업데이트 기능 ==========

// 데이터 업데이트 관리자
window.SupportFinder.DataUpdater = {
    lastUpdateTime: null,
    updateInterval: null,
    isUpdating: false,
    
    // 초기화
    init: function(intervalMinutes = 30) {
        console.log("🔄 실시간 데이터 업데이트 시스템 초기화");
        
        // 마지막 업데이트 시간 로드
        this.lastUpdateTime = this.loadLastUpdateTime();
        
        // 주기적 업데이트 시작
        this.startAutoUpdate(intervalMinutes);
        
        // 페이지 보일 때마다 체크
        this.setupVisibilityCheck();
        
        // 네트워크 상태 모니터링
        this.setupNetworkMonitor();
    },
    
    // 자동 업데이트 시작
    startAutoUpdate: function(intervalMinutes) {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
        
        // 분 단위로 변환
        var intervalMs = intervalMinutes * 60 * 1000;
        
        this.updateInterval = setInterval(function() {
            window.SupportFinder.DataUpdater.checkForUpdates();
        }, intervalMs);
        
        console.log("⏰ 자동 업데이트 설정: " + intervalMinutes + "분 간격");
        
        // 초기 로드 시 한번 체크
        setTimeout(function() {
            window.SupportFinder.DataUpdater.checkForUpdates();
        }, 5000);
    },
    
    // 업데이트 체크
    checkForUpdates: function(force = false) {
        if (this.isUpdating) {
            console.log("⏳ 이미 업데이트 중입니다.");
            return;
        }
        
        // 강제 업데이트가 아니면 조건 체크
        if (!force) {
            var now = new Date();
            var lastUpdate = this.lastUpdateTime ? new Date(this.lastUpdateTime) : null;
            
            // 1시간 이내에 업데이트 했으면 건너뛰기
            if (lastUpdate && (now - lastUpdate) < (60 * 60 * 1000)) {
                console.log("⏰ 최근에 업데이트 했으므로 건너뜁니다.");
                return;
            }
        }
        
        console.log("🔍 데이터 업데이트 확인 시작");
        this.isUpdating = true;
        
        // GitHub에서 데이터 파일 메타정보 확인
        this.checkGitHubForUpdates();
    },
    
    // GitHub에서 업데이트 확인
    checkGitHubForUpdates: function() {
        // 데이터 파일의 최신 커밋 정보 확인
        fetch('https://api.github.com/repos/kjiwongeum-ai/jiwongeum/commits?path=support_data.json&per_page=1')
            .then(response => {
                if (!response.ok) throw new Error('GitHub API 오류');
                return response.json();
            })
            .then(commits => {
                if (commits.length > 0) {
                    var latestCommit = commits[0];
                    var commitTime = new Date(latestCommit.commit.committer.date);
                    var lastUpdateTime = this.lastUpdateTime ? new Date(this.lastUpdateTime) : null;
                    
                    console.log("📊 최신 커밋 시간:", commitTime.toLocaleString());
                    console.log("📊 마지막 업데이트:", lastUpdateTime ? lastUpdateTime.toLocaleString() : "없음");
                    
                    // 새로운 업데이트가 있으면
                    if (!lastUpdateTime || commitTime > lastUpdateTime) {
                        console.log("🆕 새로운 데이터 발견!");
                        this.fetchUpdatedData();
                    } else {
                        console.log("✅ 이미 최신 데이터입니다.");
                        this.isUpdating = false;
                        
                        // 마지막 체크 시간 업데이트
                        this.saveLastUpdateTime(new Date().toISOString());
                    }
                }
            })
            .catch(error => {
                console.error("❌ 업데이트 확인 실패:", error);
                this.isUpdating = false;
            });
    },
    
    // 업데이트된 데이터 가져오기
    fetchUpdatedData: function() {
        console.log("📥 새로운 데이터 가져오는 중...");
        
        // GitHub에서 데이터 파일 직접 로드
        fetch('https://raw.githubusercontent.com/kjiwongeum-ai/jiwongeum/main/support_data.json?t=' + new Date().getTime())
            .then(response => {
                if (!response.ok) throw new Error('데이터 파일 로드 실패');
                return response.json();
            })
            .then(newData => {
                console.log("✅ 새로운 데이터 로드 완료:", newData.length + "개 항목");
                
                // 데이터 업데이트
                window.SupportFinder.updateDatabase(newData);
                
                // 업데이트 시간 저장
                this.saveLastUpdateTime(new Date().toISOString());
                
                // 이벤트 발생
                this.triggerUpdateEvent(newData);
                
                // UI 업데이트 (현재 검색 결과가 있으면)
                this.updateUIWithNewData(newData);
                
                this.isUpdating = false;
            })
            .catch(error => {
                console.error("❌ 데이터 로드 실패:", error);
                this.isUpdating = false;
            });
    },
    
    // 데이터베이스 업데이트
    updateDatabase: function(newData) {
        if (Array.isArray(newData)) {
            window.SupportFinder.SUBSIDY_DATABASE = newData;
            console.log("💾 데이터베이스 업데이트 완료");
            
            // 로컬스토리지에 캐시 저장
            try {
                localStorage.setItem('supportFinderData', JSON.stringify(newData));
                localStorage.setItem('supportFinderDataVersion', new Date().getTime().toString());
            } catch (e) {
                console.warn("⚠️ 로컬스토리지 저장 실패:", e);
            }
        }
    },
    
    // UI 업데이트
    updateUIWithNewData: function(newData) {
        // 현재 검색 결과가 있으면 업데이트
        var resultsCount = document.getElementById('supportFinderResultsCount');
        if (resultsCount && resultsCount.textContent !== '0개 지원금') {
            console.log("🎨 UI 업데이트 진행");
            
            // 사용자에게 알림
            this.showUpdateNotification(newData.length);
            
            // 현재 선택된 필터로 다시 검색
            setTimeout(function() {
                if (window.SupportFinder.performSearch) {
                    window.SupportFinder.performSearch();
                }
            }, 1000);
        }
    },
    
    // 업데이트 알림 표시
    showUpdateNotification: function(dataCount) {
        var notification = document.createElement('div');
        notification.id = 'dataUpdateNotification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideIn 0.5s ease-out;
            max-width: 300px;
        `;
        notification.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 5px;">
                <span style="font-size: 20px; margin-right: 10px;">🔄</span>
                <strong>데이터 업데이트 완료</strong>
            </div>
            <div style="font-size: 14px;">
                ${dataCount}개의 최신 지원금 정보로 업데이트되었습니다.
            </div>
            <div style="font-size: 12px; opacity: 0.8; margin-top: 5px;">
                ${new Date().toLocaleTimeString()}
            </div>
            <button onclick="this.parentElement.remove()" style="
                position: absolute;
                top: 5px;
                right: 5px;
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 16px;
            ">×</button>
        `;
        
        document.body.appendChild(notification);
        
        // 10초 후 자동 제거
        setTimeout(function() {
            if (notification.parentNode) {
                notification.style.opacity = '0';
                notification.style.transform = 'translateX(100px)';
                setTimeout(function() {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }
        }, 10000);
    },
    
    // 마지막 업데이트 시간 로드
    loadLastUpdateTime: function() {
        try {
            return localStorage.getItem('supportFinderLastUpdate');
        } catch (e) {
            return null;
        }
    },
    
    // 마지막 업데이트 시간 저장
    saveLastUpdateTime: function(time) {
        try {
            localStorage.setItem('supportFinderLastUpdate', time);
            this.lastUpdateTime = time;
            console.log("💾 마지막 업데이트 시간 저장:", new Date(time).toLocaleString());
        } catch (e) {
            console.warn("⚠️ 업데이트 시간 저장 실패:", e);
        }
    },
    
    // 업데이트 이벤트 발생
    triggerUpdateEvent: function(data) {
        var event = new CustomEvent('supportFinderDataAutoUpdated', {
            detail: {
                timestamp: new Date().toISOString(),
                data: data,
                count: data.length
            }
        });
        window.dispatchEvent(event);
    },
    
    // 페이지 가시성 체크 설정
    setupVisibilityCheck: function() {
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                // 페이지가 다시 보이면 업데이트 체크
                console.log("👀 페이지 다시 활성화, 업데이트 체크");
                setTimeout(function() {
                    window.SupportFinder.DataUpdater.checkForUpdates();
                }, 2000);
            }
        });
    },
    
    // 네트워크 상태 모니터링
    setupNetworkMonitor: function() {
        window.addEventListener('online', function() {
            console.log("🌐 네트워크 연결 복구, 업데이트 체크");
            setTimeout(function() {
                window.SupportFinder.DataUpdater.checkForUpdates();
            }, 3000);
        });
    },
    
    // 수동 업데이트 트리거
    triggerManualUpdate: function() {
        console.log("👆 수동 업데이트 요청");
        this.checkForUpdates(true);
    },
    
    // 업데이트 설정 변경
    setUpdateInterval: function(minutes) {
        this.startAutoUpdate(minutes);
    },
    
    // 상태 정보 가져오기
    getStatus: function() {
        return {
            lastUpdate: this.lastUpdateTime ? new Date(this.lastUpdateTime).toLocaleString() : '없음',
            nextCheck: this.getNextCheckTime(),
            isUpdating: this.isUpdating,
            dataCount: window.SupportFinder.SUBSIDY_DATABASE.length
        };
    },
    
    // 다음 체크 시간 계산
    getNextCheckTime: function() {
        if (!this.updateInterval) return '알 수 없음';
        
        // 간단한 예시 - 실제로는 더 정확하게 구현 필요
        return '30분 후';
    }
};

// SupportFinder 객체에 업데이트 메서드 추가
window.SupportFinder.checkForUpdates = function() {
    if (window.SupportFinder.DataUpdater) {
        window.SupportFinder.DataUpdater.checkForUpdates(true);
    }
};

// 데이터베이스 업데이트 메서드
window.SupportFinder.updateDatabase = function(newData) {
    if (Array.isArray(newData)) {
        this.SUBSIDY_DATABASE = newData;
        console.log("✅ 데이터베이스 업데이트됨:", newData.length + "개 항목");
    }
};

// 초기화 함수에 데이터 업데이터 추가
var originalInit = window.SupportFinder.init;
window.SupportFinder.init = function() {
    originalInit.call(this);
    
    // 데이터 업데이터 초기화 (30분 간격)
    if (window.SupportFinder.DataUpdater) {
        window.SupportFinder.DataUpdater.init(30);
    }
};