<script setup>
import testC1 from '@/components/testC1.vue'
import testC2 from '@/components/testC2.vue'
import RGBtest from '@/components/RGBtest.vue'
import timerC1 from '@/components/timerC1.vue'
import timerC2 from '@/components/timerC2.vue'
import brick1 from '@/components/small/brick1.vue'
//import RGBtest from '@/components/RGBtest.vue'
</script>

<template>

<table class="maintable">
<tr>
<td>

  <main>
    <table class="HomeEl">
      <tr>
        <td><testC1/></td>
      </tr>
    </table>
    <table class="HomeEl">
      <tr>
        <td><testC2/></td>
      </tr>
    </table>
    <table class="HomeEl">
      <tr>
        <td><RGBtest/></td>
      </tr>
    </table>
    <table class="HomeEl">
      <tr>
        <td><timerC1/></td>
      </tr>
    </table>
    <table class="HomeEl">
      <tr>
        <td><timerC2/></td>
      </tr>
    </table>
    <table class="HomeEl">
      <tr>
        <td><brick1/></td>
      </tr>
    </table>



  </main>

</td>
</tr>
</table>
</template>



<style>
.HomeEl {
  display: flex;

  background-color: rgb(230, 230, 230);
  padding: 20px;
  margin: 20px;
}
.maintable {
  display: flex;
  width: 100%;
  background-color: rgb(240, 240, 240);
}

</style>
