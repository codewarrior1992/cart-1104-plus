<template>
    <div>
		<div class="content-wraper account-content">
            <div class="title">
                <h3>帳戶</h3>
                <p>在此處編輯您的帳戶設定並更改密碼。</p>
            </div>
            <div class="top">
                    <div class="form-section">
                        <div class="input-group">
                            <label>基本資料</label>
                            <input type="text"  id="password" :placeholder="firstname">
                            <input type="text" :placeholder="lastname">
                        </div>
                        <label>電子郵件</label>
                        <div class="email">
                            <p>您的電子郵件地址是<b> varok1992417@gmail.com</b></p>
                            <span>
                                <button type="button" @click="modal = true"><i class="fas fa-pen"></i>
                                </button>
                            </span>
                        </div>
                    </div>
            </div>
            <div class="middle">
                <div class="form-section">
                    <div class="input-group">
                        <label for="password">密碼</label>
                        <input type="text"  id="password" placeholder="輸入目前密碼">
                        <input type="text" placeholder="輸入新的密碼">
                        <input type="text" placeholder="再次輸入新密碼">
                    </div>
                </div>    
            </div>
            <div class="bottom">
                    <a href="" class="submit-btn">儲存變更</a>
            </div>
            <div class="user-modal" @click.self="modal = false" v-if="modal === true">
                <div class="modal-wraper">
                    <div class="head">變更您的電子郵件<i class="fas fa-times" @click="modal = false"></i></div>
                    <div class="body">
                        <input type="text" :placeholder="email">
                        <input type="text" placeholder="輸入您的密碼">
                        <p>基於安全考量，若您變更電子郵件地址，您儲存的信用卡資訊將會遭到刪除。</p>
                        <a href="#" class="submit-btn">儲存</a>
                    </div>
                </div>
            </div>
		</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            firstname:'Arron',
            lastname:'CHUANG',
            modal:false,
            email:'varok1992417@gmail.com'
        }
    },
    methods:{
    }
}
</script>