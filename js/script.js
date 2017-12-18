window.onload=function () {
  // let arr=[
  //     {id:1,name:'刘伟杰',tel:10535166455,pinyin:'liuweijie'},
  //     {id:2,name:'武子厚',tel:15834670677,pinyin:'wuzihou'},
  //     {id:3,name:'郭佳杰',tel:23456789774,pinyin:'guojiajie'},
  //     {id:4,name:'乔逸欣',tel:34546875686,pinyin:'qiaoyixin'},
  //     {id:5,name:'李春刚',tel:54378975222,pinyin:'lichungang'},
  //     {id:6,name:'邓鹏',tel:18636705202,pinyin:'dengpeng'},
  //     {id:7,name:'武宇',tel:13623468951,pinyin:'wuyu'},
  // ];
  // localStorage.setItem('contact',JSON.stringify(arr));
  // localStorage.contact= JSON.stringify(arr);
  // let date=JSON.parse(localStorage.getItem('contact'));
  // rander(date);
  // function rander(data) {
  //     /*创建一个对象*/
  //     let obj={};
  //     /*对数据进行遍历*/
  //     data.forEach(element=>{
  //         /*获取到每条数据对象的 pinyin 首字母 并 大写*/
  //         let firstChart=element.pinyin.trim().charAt(0).toUpperCase();
  //         /*判断obj中是否有大写首字母这条属性*/
  //         if (!obj[firstChart]){
  //             obj[firstChart]=[];
  //         }
  //         /*将属性对应的数据添加到 obj*/
  //         obj[firstChart].push(element);
  //     });
  //     console.log(obj);
  // }
  let dl=document.querySelector('dl');
  let side=document.querySelector('.side');
  let arr=[
      {id:1,name:'anglebaby',tel:'10535166455',pinyin:'anglebaby'},
      {id:1,name:'anglebaby',tel:'10535166455',pinyin:'anglebaby'},
      {id:1,name:'anglebaby',tel:'10535166455',pinyin:'anglebaby'},
      {id:1,name:'anglebaby',tel:'10535166455',pinyin:'anglebaby'},
      {id:1,name:'anglebaby',tel:'10535166455',pinyin:'anglebaby'},
      {id:1,name:'anglebaby',tel:'10535166455',pinyin:'anglebaby'},
      {id:2,name:'武子厚',tel:'15834670677',pinyin:'wuzihou'},
      {id:3,name:'郭佳杰',tel:'23456789774',pinyin:'guojiajie'},
      {id:4,name:'乔逸欣',tel:'34546875686',pinyin:'qiaoyixin'},
      {id:5,name:'李春刚',tel:'54378975222',pinyin:'lichungang'},
      {id:6,name:'邓鹏',tel:'18636705202',pinyin:'dengpeng'},
      {id:7,name:'武宇',tel:'13623468951',pinyin:'wuyu'},
      {id:1,name:'刘伟杰',tel:'10535166455',pinyin:'liuweijie'},
      {id:2,name:'武子厚',tel:'15834670677',pinyin:'wuzihou'},
      {id:3,name:'郭佳杰',tel:'23456789774',pinyin:'guojiajie'},
      {id:4,name:'乔逸欣',tel:'34546875686',pinyin:'qiaoyixin'},
      {id:5,name:'李春刚',tel:'54378975222',pinyin:'lichungang'},
      {id:6,name:'邓鹏',tel:'18636705202',pinyin:'dengpeng'},
      {id:7,name:'武宇',tel:'13623468951',pinyin:'wuyu'},
      {id:1,name:'刘伟杰',tel:'10535166455',pinyin:'liuweijie'},
      {id:2,name:'武子厚',tel:'15834670677',pinyin:'wuzihou'},
      {id:3,name:'郭佳杰',tel:'23456789774',pinyin:'guojiajie'},
      {id:4,name:'乔逸欣',tel:'34546875686',pinyin:'qiaoyixin'},
      {id:5,name:'李春刚',tel:'54378975222',pinyin:'lichungang'},
      {id:6,name:'邓鹏',tel:'18636705202',pinyin:'dengpeng'},
      {id:7,name:'武宇',tel:'13623468951',pinyin:'wuyu'},
      {id:7,name:'武宇',tel:'13623468951',pinyin:'wuyu'},
      {id:7,name:'武宇',tel:'13623468951',pinyin:'wuyu'},
      {id:7,name:'武宇',tel:'13623468951',pinyin:'wuyu'},
      {id:7,name:'武宇',tel:'13623468951',pinyin:'wuyu'},
      {id:7,name:'武宇',tel:'13623468951',pinyin:'wuyu'},
      {id:7,name:'武宇',tel:'13623468951',pinyin:'wuyu'},
      {id:7,name:'武宇',tel:'13623468951',pinyin:'wuyu'},
      {id:7,name:'武宇',tel:'13623468951',pinyin:'wuyu'},
      {id:7,name:'武宇',tel:'13623468951',pinyin:'wuyu'},
  ];
  /*将数据保存在本地缓存 localStorage 中  通过 localStorage.setItem('名称',保存的数据对象[此处需要将JSON对象转换为JSON字符串])*/
  localStorage.setItem('contact',JSON.stringify(arr));
  localStorage.contact=JSON.stringify(arr);
  /*获取本地缓存数据*/
  let date=JSON.parse(localStorage.getItem('contact'));
  /*rander函数: 将得到数据进行数据处理,处理为*/
    /*obj={L:[{}],W:[{},{}],Y:[{},{}]}
    * L:[{}],
    * W:[{}],
    * Y:[{}],
    * */
    rander(date);
    let tips=document.getElementsByClassName('tips')[0];
    let arr1=[];
    let height=document.getElementsByTagName('header')[0].offsetHeight+document.getElementsByClassName('tips')[0].offsetHeight;
    console.log(document.getElementsByTagName('header')[0].offsetHeight);
    let search=document.getElementsByTagName('input')[0];
    let dts=document.getElementsByTagName('dt');
    tips.innerText=dts[0].innerText;
    Array.prototype.forEach.call(dts,function (element) {
        arr1.push(element.offsetTop);
    });
    window.addEventListener('scroll',function () {
        let ScrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        arr1.forEach((element,index)=>{
            // console.log(element);
            if (ScrollTop+height>=element+210){
                tips.innerText=dts[index].innerText;
            }
        })
    });
    search.addEventListener('input',function () {
       let value=this.value;
       let obj=date.filter(element=>element.pinyin.includes(value)||element.name.includes(value)||element.tel.includes(value));
        rander(obj);
    });


  function rander(data) {
      dl.innerHTML='';
      side.innerHTML='';
      /*data参数接收整条数据*/
      let obj={};
      /*initials :保存 每条对象信息中的pinyin属性值中去空，首字母，大写*/
      data.forEach(element=>{
          let initials=element.pinyin.trim().charAt(0).toUpperCase();
      /*判断obj中是否有initials这个属性
      * 没有添加，并将数据储存在属性中
      * 有，直接添加数据
      * */
          if (!obj[initials]){
              obj[initials]=[];
          }
          obj[initials].push(element);
      });
      let keys=Object.keys(obj).sort();
      keys.forEach(element=>{
          dl.innerHTML+=`<dt>${element}</dt>`;
          side.innerHTML+=`<li>${element}</li>`;
          obj[element].forEach(e=>{
              dl.innerHTML+=`
              <dd><a href="tel:${e.tel}">${e.name}</a></dd>
              `;
          })
      });

  }
  rander(date);
};