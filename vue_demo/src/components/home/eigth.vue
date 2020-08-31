<template>
	<div id="outer">
		<h2><strong>商品信息及通知</strong></h2>
		<el-collapse accordion>
		 <el-collapse-item class="wrap_out">
		    <template slot="title" >
		  				<img :src="img_Arr[0]" alt="" class="demo">
						牢牢固定
		    </template>
			<div>家中发生的安全事故可能会给儿童带来危险。只要共同努力，我们就可以防止这些事故的发生，让家成为一个安全的港湾。防范家具倾倒的最好方法是把家具固定在墙壁上。宜家恳请顾客检查购买的宜家抽屉柜和梳妆台，确保使用包装里的约束装置将它们固定在墙上。</div>
			<div>如果你需要更换约束装置套件以确保牢牢固定宜家家具，请联系在线客服。</div>
			</el-collapse-item>
		  <el-collapse-item class="wrap_out">
		    <template slot="title">
		  				<img :src="img_Arr[1]" alt="" class="demo">
		      宜家在中国大陆市场召回 KULLEN 库伦 三斗抽屉柜
		    </template>
		    <div>本次召回范围内的 KULLEN 库伦 三斗抽屉柜，如果不按照产品安装说明书使用产品附带的上墙件将抽屉柜正确地上墙固定，在特殊情况下，抽屉柜理论上存在倾倒的可能性。根据安装说明，如果将 KULLEN 库伦 三斗抽屉柜固定在墙上，则可以安全使用，符合中国市场相关标准的要求。</div>
		    <div>对于愿意继续使用 KULLEN 库伦 三斗抽屉柜的顾客，宜家将在2020年3月4日至2020年6月3日期间，为顾客提供以下解决方案以供选择：1. 前往宜家商场免费领取上墙固定配件 2. 预约免费邮寄上墙固定配件 3. 预约免费上门安装固定配件服务。在此期间，有意向退货的顾客也可直接至商场退换处或联系宜家客服中心退货。牢牢固定，让我们打造更加安全的家。宜家敦促所有尚未正确上墙固定 KULLEN 库伦 三斗抽屉柜的顾客，应尽快正确固定该产品或暂停使用。</div>
		  </el-collapse-item>
		  <el-collapse-item class="wrap_out">
		    <template slot="title">
		  				<img :src="img_Arr[2]" alt="">
		      宜家声明
		    </template>
		    <div> 2019年11月下旬宜家长沙商场开业期间至今，宜家家居从未举办过 “新店开业微信转发免费领取行李箱” 以及” 新店开业爆款秒杀运动鞋” 相关活动。</div>
		    <div> 宜家家居从未授权任何机构或个人从事上述活动。非官方平台发布的有关“宜家新店开业“活动信息，均与我司无关，请消费者注意甄别。宜家家居在中国大陆的官方信息，可通过宜家官网、宜家APP、宜家家居天猫旗舰店、宜家家居官方微信公众号（微信号IKEA-cn）、宜家家居官方微博等官方渠道获取。</div>
		  </el-collapse-item>
		  <el-collapse-item class="wrap_out">
		    <template slot="title">
		  				<img :src="img_Arr[3]" alt="">
		      钢化玻璃杯说明
		    </template>
		    <div>钢化玻璃的承载能力约为普通玻璃的五倍，因此这款杯子更加耐用，耐撞性更强。尽管钢化玻璃受到敲击、撞击或刮划后，也会像其他玻璃一样破碎,但钢化玻璃破裂后产生的锋利碎片会比普通玻璃少很多，从而减少风险。在使用玻璃杯时，请小心轻放减少撞击。</div>
		    <div>宜家提醒：这款产品仅限居家使用，请勿用于公共场所。</div>
		  </el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
	import a from '../../../public/img/home/eigth-a.webp'
	import b from '../../../public/img/home/eigth-b.webp'
	import c from '../../../public/img/home/eigth-c.webp'
	import d from '../../../public/img/home/eigth-d.webp'
	export default {
		data() {
			return {
				img_Arr:[a,b,c,d]
			};
		}
	}
</script>

<style scoped="scoped">
	#outer{
		text-align: left;
		width: 100%;
	}
	div h2{
		width: 50%;
		margin:50px auto;
		
	}
	
	img{
		width: 30%;
		}
	.wrap_out{
		margin: 0 auto;
		width: 100%;
	}
	.wrap_out >>>.el-collapse-item__header{
		height: 114px !important;
		width: 50%;
		margin: 0 auto;
	}
	.el-collapse{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.el-collapse{
		margin-bottom: 50px;
	}
	.el-collapse-item__content div{
		width: 50%;
		margin: 0 auto;
	}
</style>
