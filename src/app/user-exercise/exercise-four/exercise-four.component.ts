import {Component, OnInit} from '@angular/core';

declare var AMap: any;
declare var AMapUI: any;

@Component({
    selector: 'app-exercise-four',
    templateUrl: './exercise-four.component.html',
    styleUrls: ['./exercise-four.component.css']
})
export class ExerciseFourComponent implements OnInit {
    person = JSON.parse(localStorage.getItem('personEntity'));

    constructor() {
    }

    ngOnInit() {
        const map = new AMap.Map('container', {
            resizeEnable: true,
            center: [123.44778, 41.722547],
            zoom: 15,
            isHotspot: true
        });
        const placeSearch = new AMap.PlaceSearch();  // 构造地点查询类
        const infoWindow = new AMap.AdvancedInfoWindow({});
        map.on('hotspotclick', (result) => {
            placeSearch.getDetails(result.id, function (status, result) {
                // console.log(JSON.stringify(result));
                if (status === 'complete' && result.info === 'OK') {
                    placeSearch_CallBack(result);
                }
            });
        });

        // 回调函数
        const placeSearch_CallBack = (data: any): void => { // infoWindow.open(map, result.lnglat);
            const poiArr = data.poiList.pois;
            const location = poiArr[0].location;
            console.log(location);
            infoWindow.setContent(createContent(poiArr[0]));
            infoWindow.open(map, location);
        }

        const createContent = (poi: any): string => {  // 信息窗体内容
            const s = [];
            s.push('<div class="info-title">' + poi.name + '</div><div class="info - content" > ' + '地址：' + poi.address
            )
            ;
            s.push('电话：' + poi.tel);
            s.push('类型：' + poi.type);
            s.push('</div>');
            return s.join('</br>');
        }


        AMapUI.loadUI(['overlay/SimpleInfoWindow'], (SimpleInfoWindow) => {

            const marker = new AMap.Marker({
                map: map,
                zIndex: 9999999,
                position: map.getCenter()
            });

            const infoWindow = new SimpleInfoWindow({
                infoTitle: '<strong>IT国际</strong>',
                infoBody: '<p class="my-desc"><strong>个人信息</strong> ' +
                '<br/> 姓名：' + this.person.uname + '' +
                '<br/> 性别：' + this.person.usex + '' +
                '<br/> 年龄：' + this.person.uage + '' +
                '<br/> 电话：' + this.person.utel + '' +
                '<br/> 地址：' + this.person.uaddress + '</p >',

                offset: new AMap.Pixel(0, -31)
            });

            const openInfoWin = (): void => {
                infoWindow.open(map, marker.getPosition());
            }

            AMap.event.addListener(marker, 'click', () => {
                openInfoWin();
            });
        });
    }
}
