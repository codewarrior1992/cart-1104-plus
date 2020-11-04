<template>
    <div>
		<Header />
        <div class="contact container">
            <div class="bg-cover">
                <h2>LOCATIONS</h2>
                <p>To find your nearest restaurant, just follow the smoky, mouth-watering scent of sizzling burgers or check out our locations bellow.</p>
            </div>
            <h2>OUR BRANCH</h2>
            <div class="branch">
                <h3 class="active">QUEENSLAND</h3>
                <h3>NEW SOUTH WALES</h3>
                <h3>VICTORIA</h3>
            </div>
            <div class="branch-content">
                <div class="wraper">
                    <div class="info">
                        <h4 class="name">BRISBANE AIRPORT</h4>
                        <ul>
                            <li>Southern End Domestic TerminalBrisbane, QLD 4008</li>
                            <li>Open 6.30am – 9.30pm Daily</li>
                            <li><a href="tel:+8863345678">(555) 234 765 1</a></li>
                        </ul>
                    </div>
                    <div class="map"></div>
                </div>
                <div class="wraper">
                    <div class="info">
                        <h4 class="name">BRISBANE AIRPORT</h4>
                        <ul>
                            <li>Southern End Domestic TerminalBrisbane, QLD 4008</li>
                            <li>Open 6.30am – 9.30pm Daily</li>
                            <li><a href="tel:+8863345678">(555) 234 765 1</a></li>
                        </ul>
                    </div>
                    <div class="map"></div>
                </div>
            </div>
            <h2>CONTACT US</h2>
            <div class="contact-group">
                <div class="main-info">
                    <div class="input-group">
                        <input type="text" placeholder="Input your name ...">
                        <label for="">YOUR NAME</label>
                    </div>
                    <div class="input-group">
                        <input type="email" placeholder="Input your email ...">
                        <label for="">E-MAIL ADDRESS</label>
                    </div>
                    <div class="input-group">
                        <input type="text" placeholder="Input your phone ...">
                        <label for="">PHONE</label>
                    </div>
                    <a href="#" class="submit">SUBMIT</a>
                </div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
        <Footer />
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
        return{

        }
    }
}
</script>