<template lang="pug">
  .animated.fadeIn
    b-row
      b-col(md='12')
        b-card
          div(slot='header')
            strong Credit Card
            small Form
          b-row
            b-col(sm='12')
              b-form-group
                label(for='name') Name
                b-form-input#name(type='text', placeholder='Enter your name')
          b-row
            b-col(sm='12')
              b-form-group
                label(for='ccnumber') Credit Card Number
                b-form-input#ccnumber(type='text', placeholder='0000 0000 0000 0000')
          b-row
            b-col(sm='4')
              b-form-group
                label(for='month1') Month
                b-form-select#month1(:plain='true', :options='[1,2,3,4,5,6,7,8,9,10,11,12]')
            b-col(sm='4')
              b-form-group
                label(for='year1') Year
                b-form-select#year1(:plain='true', :options='[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]')
            b-col(sm='4')
              b-form-group
                label(for='cvv') CVV/CVC
                b-form-input#cvv(type='text', placeholder='123')
</template>

<script>
export default {
  name: 'Result'
}
</script>

<style scoped>

</style>
