<template>
    <div class="about-page">
        <Header/>
        <div class="full-screen-cover">
            <h2>About Los Pollos</h2>
        </div>

        <!-- about us -->
		<div class="container about">
            <div class="intro">
                <h2 class="">We only use the highest quality ingredients.
                The result is a taste you can swear by.
                </h2>
			    <span class=""
					>Spicy jalapeno bacon ipsum dolor amet jowl brisket
					burgdoggen, meatball bresaola bacon boudin tri-tip pig pork
					fatback pork chop prosciutto short ribs pork belly. Ham
					boudin rump strip steak, porchetta drumstick picanha spare
					ribs sausage. Tongue ham hock turkey kevin ham short loin
					tenderloin beef ribs shank turducken chicken. Shankle ham
					boudin porchetta, corned beef ribeye strip steak pork
					chop.
                </span>
            </div>
			<img src="@/../public/images/background/sandwich-board.png" alt="" />
		</div>
		<!-- our story -->
		<div class="container story">
			<h2>Our Story</h2>
			<ul class="tabs">
				<li class="tab-link">1992</li>
				<li class="tab-link active">2006</li>
				<li class="tab-link">2020</li>
			</ul>
		    <div class="tab-content" id="pre">
			    <div class="photo"></div>
				<div class="info">
						<h3>Title</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et eaque soluta aut eligendi dolore cupiditate
							sunt hic in facilis officiis architecto mollitia,
							consectetur non obcaecati aperiam accusantium nulla
							autem, consequuntur, quasi odio alias adipisci
							tempora quisquam eveniet? Corporis accusantium
							dignissimos quos aperiam neque repellat odio magnam
							asperiores quas numquam! Odio.
						</p>
				</div>
			</div>
				<!-- <div class="tab-content" id="mid">
        <div class="photo"></div>
        <div class="info">
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et eaque
            soluta aut eligendi dolore cupiditate sunt hic in facilis officiis
            architecto mollitia, consectetur non obcaecati aperiam accusantium
            nulla autem, consequuntur, quasi odio alias adipisci tempora
            quisquam eveniet? Corporis accusantium dignissimos quos aperiam
            neque repellat odio magnam asperiores quas numquam! Odio.
          </p>
        </div>
      </div>
      <div class="tab-content" id="now">
        <div class="photo"></div>
        <div class="info">
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et eaque
            soluta aut eligendi dolore cupiditate sunt hic in facilis officiis
            architecto mollitia, consectetur non obcaecati aperiam accusantium
            nulla autem, consequuntur, quasi odio alias adipisci tempora
            quisquam eveniet? Corporis accusantium dignissimos quos aperiam
            neque repellat odio magnam asperiores quas numquam! Odio.
          </p>
        </div>
      </div> -->
		</div>
		<!-- awards -->
		<div class="container awards">
            <div class="intro">
                <h2 class="">Press & Awards</h2>
                <span class=" ">
                    Spicy jalapeno bacon ipsum dolor amet jowl brisket
                    burgdoggen, meatball bresaola bacon boudin tri-tip pig pork
                    fatback pork chop prosciutto short ribs pork belly. Ham
                    boudin rump strip steak, porchetta drumstick.
                </span>
            </div>
			<img src="@/../public/images/others/awards-600x164.jpg" alt="" />
		</div>
        <Footer/>
    </div>
</template>
<script>
import Header from '@/components/client/Header.vue';
import Footer from '@/components/client/Footer.vue';
export default {
    components:{
        Header,
        Footer
    },
    data(){
        return {
      bgcheckout:
        "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/back-chefs-title.jpg",
    };
    }
}
</script>