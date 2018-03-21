/**
 * Created by zhijun on 2017/2/11.
 */
//遍历banner部分生活服务的小图片
var lifeser_ul = document.getElementById('lifeserUl');
var lifeser_is = lifeser_ul.getElementsByTagName('i');

for(var i = 0;i < lifeser_is.length;i++){
    lifeser_is[i].style.backgroundPosition = 'left '+(-25*i)+'px';
}

