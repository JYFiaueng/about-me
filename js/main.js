$(function (){
    $('#dowebok').fullpage({
        sectionsColor: ['#3498DB', '#2ECC71', '#eee', '#F39C12', '#FFFEBB'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        continuousVertical: true,
        menu: '#menu',
        afterLoad:function(amchorLink, index){
            if(amchorLink === 'page3'){
                $('#SkillTree').css({
                    height:$('body').height()-200
                });
                var frame = echarts.init(document.getElementById('SkillTree'));
                frame.setOption(option);
            }
            if(amchorLink === 'page2'){
                $('.headPicture').addClass('headPicture-active');
                $('.whiteFont').addClass('whiteFont-active');
            }
            if(amchorLink === 'page4'){
                $('.showImg img').css('opacity', '1');
            }
        },
        afterRender:function (){
            
        },
    });
    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);
    var option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: 'center',
            data:['框架/库','语言','其他']
        },
        radar: [
            {
                indicator: [
                    {text: 'Angularjs', max: 100},
                    {text: 'JQuery', max: 100},
                    {text: 'Bootstrap', max: 100},
                    {text: 'Express', max: 100},
                    {text: 'Koa', max: 100}
                ],
                center: ['20%','60%'],
                radius: 100
            },
            {
                indicator: [
                    {text: 'JavasSript', max: 100},
                    {text: 'ES6', max: 100},
                    {text: 'Java', max: 100},
                    {text: 'Nodejs', max: 100},
                    {text: 'SQL', max: 100},
                    {text: 'HTML', max: 100},
                    {text: 'CSS', max: 100}
                ],
                center: ['50%','40%'],
                radius: 100
            },
            {
                indicator: [
                    {text: '排序算法', max: 100},
                    {text: '设计模式', max: 100},
                    {text: 'sublime', max: 100},
                    {text: '解决问题', max: 100},
                    {text: '电影', max: 100},
                    {text: '书籍', max: 100}
                ],
                center: ['80%','60%'],
                radius: 100
            }
        ],
        series: [
            {
                type: 'radar',
                 tooltip: {
                    trigger: 'item'
                },
                itemStyle: {normal: {areaStyle: {type: 'macarons'}}},
                data: [
                    {
                        value: [70,70,60,90,90],
                        name: '框架/库'
                    }
                ]
            },
            {
                type: 'radar',
                radarIndex:1,
                tooltip: {
                    trigger: 'item'
                },
                itemStyle: {normal: {areaStyle: {type: 'roma'}}},
                data: [
                    {
                        value: [90,80,40,60,40,80,70],
                        name: '语言'
                    }
                ]
            },
            {
                type: 'radar',
                radarIndex:2,
                tooltip: {
                    trigger: 'item'
                },
                itemStyle: {normal: {areaStyle: {type: 'vintage'}}},
                data: [
                    {
                        value: [60,75,70,80,85,40],
                        name: '其他'
                    }
                ]
            }
        ]
    };
});