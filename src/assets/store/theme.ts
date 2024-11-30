import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        dark:[
            {
                themeName:'槿紫',
                colorDict:new Map([
                    ['primary','#806d9e'],
                    ['fill-primary','#ffff'],
                    ['text','#fffefa'],
                    ['text-title','#beb3ce'],
                    ['text-subtitle','#9b93a8'],
                    ['text-secondary','#7a7384'],
                    ['text-placeholder','#5b5662'],
                    ['text-link','#b8a1cf'],
                    ['fill','#22202e'],
                    ['fill-body','#0f1423'],
                ])
            },
            {
                themeName:'淡茜红',
                colorDict:new Map([
                    ['primary','#e77c8e'],
                    ['fill-primary','#ffff'],
                    ['text','#fffefa'],
                    ['text-title','#fbd4d8'],
                    ['text-subtitle','#ccadb0'],
                    ['text-secondary','#a0888a'],
                    ['text-placeholder','#756466'],
                    ['text-link','#a4ccdc'],
                    ['fill','#131824'],
                    ['fill-body','#0f1423'],
                ])
            },
            {
                themeName:'柏林爱乐',
                colorDict:new Map([
                    ['primary','#ffcc00'],
                    ['fill-primary','#ffff'],
                    ['text','#fffefa'],
                    ['text-title','#ffff'],
                    ['text-subtitle','#ffff'],
                    ['text-secondary','#ffff'],
                    ['text-placeholder','#ffff'],
                    ['text-link','#ebbf33'],
                    ['fill','#0c0c0c'],
                    ['fill-body','#1f1f1f'],
                ])
            },
            {
                themeName:'afraid',
                colorDict:new Map([
                    ['primary','#d72323'],
                    ['fill-primary','#fff'],
                    ['text','#fffefa'],
                    ['text-title','#ffff'],
                    ['text-subtitle','#ffff'],
                    ['text-secondary','#ffff'],
                    ['text-placeholder','#ffff'],
                    ['text-link','#e41749'],
                    ['fill','#000000'],
                    ['fill-body','#0D0D0D'],
                ])
            },
            {
                themeName:'graceful',
                colorDict:new Map([
                    ['primary','#e84a5f'],
                    ['fill-primary','#f9f7f7'],
                    ['text','#f6f6f6'],
                    ['text-title','#8785a2'],
                    ['text-subtitle','#ffe2e2'],
                    ['text-secondary','#ffe2e2'],
                    ['text-placeholder','#ffe2e2'],
                    ['text-link','#ffe2e2'],
                    ['fill','#384259'],
                    ['fill-body','#2a363b'],
                ])
            },
        ],
        light:[
            {
                themeName:'经典紫',
                colorDict:new Map([
                    ['primary','#9966ff'],
                    ['fill-primary','#ffff'],
                    ['text','#3c3c43'],
                    ['text-title','#8076a3'],
                    ['text-subtitle','#958bb2'],
                    ['text-secondary','#a9a2c1'],
                    ['text-placeholder','#beb8d0'],
                    ['text-link','#a174f3'],
                    ['fill','#ffff'],
                    ['fill-body','#f7f9fe'],
                ])
            },
            {
                themeName:'霁青',
                colorDict:new Map([
                    ['primary','#63bbd0'],
                    ['fill-primary','#ffff'],
                    ['text','#3c3c43'],
                    ['text-title','#7c9faa'],
                    ['text-subtitle','#92aeb8'],
                    ['text-secondary','#a7bec6'],
                    ['text-placeholder','#bdced4'],
                    ['text-link','#a4ccdc'],
                    ['fill','#ffff'],
                    ['fill-body','#fffef9'],
                ])
            },
            {
                themeName:'淡菽红',
                colorDict:new Map([
                    ['primary','#ed4845'],
                    ['fill-primary','#ffff'],
                    ['text','#3c3c43'],
                    ['text-title','#cc163a'],
                    ['text-subtitle','#db4e57'],
                    ['text-secondary','#e77576'],
                    ['text-placeholder','#f29896'],
                    ['text-link','#bf3553'],
                    ['fill','#ffff'],
                    ['fill-body','#f5f5f5'],
                ])
            },
            {
                themeName:'金莲花橙',
                colorDict:new Map([
                    ['primary','#f86b1d'],
                    ['fill-primary','#ffff'],
                    ['text','#3c3c43'],
                    ['text-title','#cb591c'],
                    ['text-subtitle','#d97542'],
                    ['text-secondary','#e69066'],
                    ['text-placeholder','#f0ac8b'],
                    ['text-link','#ed5126'],
                    ['fill','#ffff'],
                    ['fill-body','#fff5ee'],
                ])
            },
            {
                themeName:'蔻梢绿',
                colorDict:new Map([
                    ['primary','#5dbe8a'],
                    ['fill-primary','#ffff'],
                    ['text','#3c3c43'],
                    ['text-title','#4e9c72'],
                    ['text-subtitle','#6dac88'],
                    ['text-secondary','#8bbd9f'],
                    ['text-placeholder','#a8cdb6'],
                    ['text-link','#16982b'],
                    ['fill','#ffff'],
                    ['fill-body','#fff'],
                ])
            },
            {
                themeName:'淡绛红',
                colorDict:new Map([
                    ['primary','#ec7696'],
                    ['fill-primary','#ffff'],
                    ['text','#3c3c43'],
                    ['text-title','#f6a5b8'],
                    ['text-subtitle','#f9b4c3'],
                    ['text-secondary','#fbc3cf'],
                    ['text-placeholder','#fdd2db'],
                    ['text-link','#e68ab8'],
                    ['fill','#ffff'],
                    ['fill-body','#fff'],
                ])
            },
            {
                themeName:'深牵牛紫',
                colorDict:new Map([
                    ['primary','#1c0d1a'],
                    ['fill-primary','#ffff'],
                    ['text','#3c3c43'],
                    ['text-title','#5f545d'],
                    ['text-subtitle','#786e76'],
                    ['text-secondary','#918990'],
                    ['text-placeholder','#aca5aa'],
                    ['text-link','#404040'],
                    ['fill','#ffff'],
                    ['fill-body','#fffef8'],
                ])
            },
            {
                themeName:'莫兰迪-1',
                colorDict:new Map([
                    ['primary','#75809C'],
                    ['fill-primary','#ffff'],
                    ['text','#3c3c43'],
                    ['text-title','#8E9AAB'],
                    ['text-subtitle','#a0aab9'],
                    ['text-secondary','#b3bbc6'],
                    ['text-placeholder','#c5cbd4'],
                    ['text-link','#b3b2d2'],
                    ['fill','#ffff'],
                    ['fill-body','#F8F8F8'],
                ])
            },
            {
                themeName:'莫兰迪-2',
                colorDict:new Map([
                    ['primary','#FD9270'],
                    ['fill-primary','#ffff'],
                    ['text','#3c3c43'],
                    ['text-title','#E1AA8D'],
                    ['text-subtitle','#e7b89f'],
                    ['text-secondary','#edc6b2'],
                    ['text-placeholder','#f2d4c5'],
                    ['text-link','#DEA592'],
                    ['fill','#ffff'],
                    ['fill-body','#F8F8F8'],
                ])
            },
            {
                themeName:'中国红',
                colorDict:new Map([
                    ['primary','#E60000'],
                    ['fill-primary','#ffff'],
                    ['text','#3c3c43'],
                    ['text-title','#dd0000'],
                    ['text-subtitle','#eb4c2f'],
                    ['text-secondary','#f77456'],
                    ['text-placeholder','#ff987e'],
                    ['text-link','#cf311a'],
                    ['fill','#ffff'],
                    ['fill-body','#F8F8F8'],
                ])
            },
            {
                themeName:'木乃伊棕',
                colorDict:new Map([
                    ['primary','#8f4b28'],
                    ['fill-primary','#ffff'],
                    ['text','#3c3c43'],
                    ['text-title','#b9846a'],
                    ['text-subtitle','#c69881'],
                    ['text-secondary','#d2ac99'],
                    ['text-placeholder','#dec0b2'],
                    ['text-link','#966953'],
                    ['fill','#ffff'],
                    ['fill-body','#F8F8F8'],
                ])
            },
            {
                themeName:'mystery',
                colorDict:new Map([
                    ['primary','#516b91'],
                    ['fill-primary','#ffff'],
                    ['text','#3c3c43'],
                    ['text-title','#8a9ab5'],
                    ['text-subtitle','#9daac1'],
                    ['text-secondary','#b0bbcd'],
                    ['text-placeholder','#c4cbda'],
                    ['text-link','#46576f'],
                    ['fill','#fff'],
                    ['fill-body','#F8F8F8'],
                ])
            },
            {
                themeName:'graceful',
                colorDict:new Map([
                    ['primary','#fa9eb6'],
                    ['fill-primary','#ffff'],
                    ['text','#898bc9'],
                    ['text-title','#898bc9'],
                    ['text-subtitle','#b3b5da'],
                    ['text-secondary','#c0c1e0'],
                    ['text-placeholder','#cccde6'],
                    ['text-link','#cccde6'],
                    ['fill','#fff'],
                    ['fill-body','#F8F8F8'],
                ])
            },
          
            
           
        ],
        currentTheme:'0?0'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }),
    actions: {
        changeTheme(model,index){
                        if(model == 0){
                this.light[index].colorDict.forEach((k,v)=>{
                    document.getElementsByTagName('body')[0].style.setProperty(`--${v}`, `${k}`);
                   })
            }else{
                this.dark[index].colorDict.forEach((k,v)=>{
                    document.getElementsByTagName('body')[0].style.setProperty(`--${v}`, `${k}`);
                   })
            }
            localStorage.setItem('themeData',`${model}?${index}`);  
        },
        getCurrentThemeInfo(){
            if(this.currentTheme != null && this.currentTheme != ''){
                return this.currentTheme.split('?')[0] == '1' ? this.dark[parseInt(this.currentTheme.split('?')[1])].colorDict :this.light[parseInt(this.currentTheme.split('?')[1])].colorDict;
            }
        }
    }
})