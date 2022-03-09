<template>
    <div>
     <h1 id="heading1"></h1>
    <img src="https://img.icons8.com/cute-clipart/344/login-rounded-right.png" alt="Login Logo" style="width:100px; height:100px;">
        <form action="" class="myForm" name="myForm">
            <div class="input-container">
                <i class="fa fa-envelope icon"></i>
                <input type="email" placeholder="Email" name="email" class="input-field" required>
            </div>
            <div class="input-container">
                <i class="fa fa-key icon"></i>
                <input type="password" placeholder="Passw" name="pass" class="input-field" required>
            </div>
            <div><input type="submit" class="bttn"></div>
        </form>
    </div>
</template>

<script lang="ts">
export default {
  props: {
    results: [],
  },
};
</script>
