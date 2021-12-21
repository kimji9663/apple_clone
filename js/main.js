(() => {

    let yOffset = 0; //window.pageYOffse 대신 쓸 변수(현재 위치값)
    let prevScrollHeight = 0; // 현재 위치한 스크롤 위치값 이전의 섹션 높이값들의 합
    let currentScene = 0; // 현재 보이는 scene(scroll-section)

    const sceneInfo = [
        {
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0')
            }
        },
        {
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3')
            }
        }
        
    ];

    function setLayout() {
        for (let i = 0; i < sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }
        //console.log(sceneInfo);
    }
    
    function scrollLoop() {
        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;

        }

        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            currentScene++;
        }

        if (yOffset < prevScrollHeight){
            if (currentScene === 0) return;
            currentScene--;
        }
        console.log(currentScene);
        //console.log(prevScrollHeight);
        //console.log(yOffset);

        document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    });

    setLayout();
})();