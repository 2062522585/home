import banner_a from '../../public/img/home/banner_a.webp';
import banner_b from '../../public/img/home/banner_b.webp';
import banner_f from '../../public/img/home/banner_f.jpg';
import banner_g from '../../public/img/home/banner_g.gif';
import sec_a from '../../public/img/home/second-a.jpg';
import sec_b from '../../public/img/home/second-b.webp';
import sec_c from '../../public/img/home/second-c.webp';
import third_a from '../../public/img/home/third-a.webp';
import third_b from '../../public/img/home/third-b.webp';
import third_c from '../../public/img/home/third-c.webp';
import third_d from '../../public/img/home/third-d.webp';
import third_e from '../../public/img/home/third-e.jpg';
import third_f from '../../public/img/home/third-f.webp';
import third_g from '../../public/img/home/third-g.webp';
import fifth_a from '../../public/img/home/fifth_a.webp';
import fifth_b from '../../public/img/home/fifth_b.webp';
import fifth_c from '../../public/img/home/fifth_c.webp';
import fifth_d from '../../public/img/home/fifth_d.webp';
import fifth_e from '../../public/img/home/fifth_e.webp';
import fifth_f from '../../public/img/home/fifth_f.webp';
import fifth_g from '../../public/img/home/fifth_g.webp';
import fifth_h from '../../public/img/home/fifth_h.webp';
import fifth_i from '../../public/img/home/fifth_i.webp';
import sixth_a from '../../public/img/home/sixth_a.webp';
import sixth_b from '../../public/img/home/sixth_b.webp';
import sixth_c from '../../public/img/home/sixth_c.webp';
import sixth_d from '../../public/img/home/sixth_d.webp';
import sixth_e from '../../public/img/home/sixth_e.webp';
import sixth_f from '../../public/img/home/sixth_f.webp';
import sixth_g from '../../public/img/home/sixth_g.webp';
import sixth_h from '../../public/img/home/six_h.jpg';
import sevnth_a from '../../public/img/home/seventh_a.webp';
import sevnth_b from '../../public/img/home/seventh_b.webp';
import sevnth_c from '../../public/img/home/seventh-c.jpg';


export default {
	state:{
		bannerArr:[
			{
				id:1,
				img:banner_a
			},
			{
				id:2,
				img:banner_b
			},
			{
				id:6,
				img:banner_f
			},
			{
				id:7,
				img:banner_g
			},
			],
		secArr:[sec_a,sec_b,sec_c],
		thirdUpArr:[third_a,third_b,third_c,third_d,third_e,third_f,third_g],
		fifArr:[fifth_a,fifth_b,fifth_c,fifth_d,fifth_e,fifth_f,fifth_g,fifth_h,fifth_i],
		sixArr:[
			{
				id:1,
				sort:"BILLY 毕利 书柜系列",
				info:"全球每5分钟售出1套的明星产品，不只是书架！",
				img:sixth_a
			},
			{
				id:2,
				sort:"HEMNES 汉尼斯 卧室家具系列",
				info:"为卧室带来复古的全新风貌。",
				img:sixth_b
			},
			{
				id:3,
				sort:"EKTORP 爱克托 沙发系列",
				info:"经典造型，柔软舒适，10年质保。现有更多个性颜色选择！",
				img:sixth_c
			},
			{
				id:4,
				sort:"宜家床垫系列",
				info:"25年品质保证，给你安心舒适的睡眠。",
				img:sixth_d
			},
			{
				id:5,
				sort:"EKEDALEN 伊克多兰 餐桌椅系列",
				info:"简约实用的可伸缩餐桌。",
				img:sixth_e
			},
			{
				id:6,
				sort:"PAX 帕克思 衣柜系列",
				info:"多样外观，强大内配，更有10年品质保证。",
				img:sixth_f
			},
			{
				id:7,
				sort:"GODMORGON 古德莫 浴室系列",
				info:"助您轻松打造梦想浴室。10年品质保证。",
				img:sixth_g
			},
			{
				id:8,
				sort:"STUVA 斯多瓦 儿童储物系列",
				info:"和孩子一起成长的储物家具。",
				img:sixth_h
			},
		],
		sevnthArr:[
			{
				id:1,
				kw:"宜家俱乐部",
				img:sevnth_a
			},
			{
				id:2,
				kw:"宜家对公业务部",
				img:sevnth_b
			},
			{
				id:3,
				kw:"可持续发展产品",
				img:sevnth_c
			}
		]
	
	},
	mutations:{
		// addShopList(state,item){
		// 	if(state.shopList.has(item)){
		// 		let count = state.shopList.get(item)
		// 		state.shopList.set(item,count+1)
		// 	} else {
		// 		state.shopList.set(item,1)
		// 	}
		// }
	}
}