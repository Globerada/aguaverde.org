<template>
  <section id="testimonials">
    <div class="section text-center">
      <h3>¿Qué opinan nuestros entrenadores?</h3>
      <div class="container flex justify-between flex-wrap lg:flex-no-wrap">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="teacher-card w-full lg:max-w-24">
            <img :src="testimonial.avatar" 
              :alt="testimonial.name" :title="testimonial.name" />
            <h3 :title="testimonial.name" class="title">{{ testimonial.name }}</h3>
            <p>
                {{ testimonial.description }}
            </p>
        </div>
      </div>
    </div>
  </section>  
</template>

<script>
export default {
  data(){
    return {
      testimonials: [
        {
          name: 'José Antonio Fanego',
          avatar: 'https://i.imgur.com/6FbzTmK.png',
          description: 'Estoy muy contento y motivo de pertener al Aguaverde. Cada semana intento que mis compañeros amen un poco más este deporte',
          social: {
              twitter: '',
              facebook: ''
          }
        },
        {
          name: 'Pablo García Traba',
          avatar: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-1/c0.0.100.100/p100x100/264710_4369701721493_428191146_n.jpg?_nc_cat=107&oh=7aaaa43ebd29d571521312b83656229d&oe=5C43C747',
          description: 'La filosofía del club encaja con mi forma de ser, y así intento transmitirlo en la cancha. Ser globero no implica causalidad',
          social: {
              twitter: '',
              facebook: ''
          }
        }
      ]
    }
  }
}
</script>

<style>
#testimonials {
  background: linear-gradient(180deg,#edf3ff 400px,#4f48ad 0,#4f48ad 60%,#2c2678);
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.container{
    width:100%
}
@media(min-width:576px){
    .container{
        max-width:576px
    }
}
@media(min-width:768px){
    .container{
        max-width:768px
    }
}
@media(min-width:992px){
    .container{
        max-width:992px
    }
}
@media(min-width:1250px){
    .container{
        max-width:1250px
    }
}
.justify-between{
    justify-content:space-between
}
.flex{
    display:flex
}
.flex-wrap{
    flex-wrap:wrap
}

@media(min-width:992px){
    .lg\:bg-white{
        background-color:#fff
    }
    .lg\:block{
        display:block
    }
    .lg\:inline{
        display:inline
    }
    .lg\:hidden{
        display:none
    }
    .lg\:flex-row{
        flex-direction:row
    }
    .lg\:flex-no-wrap{
        flex-wrap:nowrap
    }
    .lg\:justify-between{
        justify-content:space-between
    }
    .lg\:h-10{
        height:2.5rem
    }
    .lg\:m-0{
        margin:0
    }
    .lg\:my-0{
        margin-bottom:0;
        margin-top:0
    }
    .lg\:mx-0{
        margin-left:0;
        margin-right:0
    }
    .lg\:my-4{
        margin-bottom:1rem;
        margin-top:1rem
    }
    .lg\:mx-4{
        margin-left:1rem;
        margin-right:1rem
    }
    .lg\:my-8{
        margin-bottom:2rem;
        margin-top:2rem
    }
    .lg\:my-16{
        margin-bottom:4rem;
        margin-top:4rem
    }
    .lg\:mx-auto{
        margin-left:auto;
        margin-right:auto
    }
    .lg\:mt-0{
        margin-top:0
    }
    .lg\:mb-0{
        margin-bottom:0
    }
    .lg\:mb-2{
        margin-bottom:.5rem
    }
    .lg\:mt-4{
        margin-top:1rem
    }
    .lg\:mt-8{
        margin-top:2rem
    }
    .lg\:mr-8{
        margin-right:2rem
    }
    .lg\:mb-8{
        margin-bottom:2rem
    }
    .lg\:ml-8{
        margin-left:2rem
    }
    .lg\:mt-10{
        margin-top:2.5rem
    }
    .lg\:mr-10{
        margin-right:2.5rem
    }
    .lg\:ml-14{
        margin-left:3.5rem
    }
    .lg\:mt-16{
        margin-top:4rem
    }
    .lg\:mb-16{
        margin-bottom:4rem
    }
    .lg\:max-w-24{
        max-width:24rem
    }
    .lg\:max-w-2xs{
        max-width:10rem
    }
    .lg\:max-w-full{
        max-width:100%
    }
    .lg\:min-w-16{
        min-width:16rem
    }
    .lg\:p-0{
        padding:0
    }
    .lg\:px-0{
        padding-left:0;
        padding-right:0
    }
    .lg\:py-4{
        padding-bottom:1rem;
        padding-top:1rem
    }
    .lg\:py-8{
        padding-bottom:2rem;
        padding-top:2rem
    }
    .lg\:px-10{
        padding-left:2.5rem;
        padding-right:2.5rem
    }
    .lg\:py-12{
        padding-bottom:3rem;
        padding-top:3rem
    }
    .lg\:py-16{
        padding-bottom:4rem;
        padding-top:4rem
    }
    .lg\:pl-0{
        padding-left:0
    }
    .lg\:pr-8{
        padding-right:2rem
    }
    .lg\:pb-10{
        padding-bottom:2.5rem
    }
    .lg\:pr-12{
        padding-right:3rem
    }
    .lg\:pt-16{
        padding-top:4rem
    }
    .lg\:pb-16{
        padding-bottom:4rem
    }
    .lg\:pt-24{
        padding-top:6rem
    }
    .lg\:shadow-lg{
        box-shadow:0 15px 30px 0 rgba(0,0,0,.11),0 5px 15px 0 rgba(0,0,0,.08)
    }
    .lg\:text-left{
        text-align:left
    }
    .lg\:text-xl{
        font-size:1.25rem
    }
    .lg\:text-2xl{
        font-size:1.625rem
    }
    .lg\:text-4xl{
        font-size:2.25rem
    }
    .lg\:w-10{
        width:2.5rem
    }
    .lg\:w-auto{
        width:auto
    }
    .lg\:w-1\/2{
        width:50%
    }
    .lg\:w-1\/3{
        width:33.33333%
    }
    .lg\:w-2\/3{
        width:66.66667%
    }
    .lg\:w-3\/4{
        width:75%
    }
    .lg\:w-1\/5{
        width:20%
    }
    .lg\:w-3\/5{
        width:60%
    }
    .lg\:w-4\/5{
        width:80%
    }
    .lg\:w-5\/6{
        width:83.33333%
    }
    .lg\:w-full{
        width:100%
    }
}
@media(min-width:1250px){
    .xl\:justify-between{
        justify-content:space-between
    }
    .xl\:-ml-8{
        margin-left:-2rem
    }
    .xl\:-mt-16{
        margin-top:-4rem
    }
    .xl\:text-lg{
        font-size:1.125rem
    }
    .xl\:text-2xl{
        font-size:1.625rem
    }
    .xl\:w-1\/2{
        width:50%
    }
    .xl\:w-3\/5{
        width:60%
    }
}
.teacher-card {
    background-color: #fff;
    border-radius: .5rem;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,.11), 0 5px 15px 0 rgba(0,0,0,.08);
    /*
    display: flex;
    flex-wrap: wrap;
    */
    margin-bottom: 5rem;
    margin-top: 4rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 2rem;
    text-align: center;
}
.teacher-card>.title {
    color: #5e527f;
    font-size: 1.625rem;
    font-weight: 400;
    margin-bottom: .75rem;
}
.teacher-card>p {
    line-height: 1.5;
    margin-bottom: 1rem;
}
.teacher-card>img {
    border: 9px solid #fff;
    border-radius: 9999px;
    height: 8rem;
    margin: -4rem auto .5rem;
    width: 8rem;
}
.teacher-card ul.socials {
    align-self: flex-end;
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
}
.teacher-card ul.socials>li {
    align-items: center;
    background: linear-gradient(270deg,#4f48ad 1.01%,#1d185e 73.64%);
    background: linear-gradient(182.66deg,#4f48ad 2.16%,#1d185e 97.84%);
    border-radius: 9999px;
    display: flex;
    height: 2.5rem;
    justify-content: center;
    margin-left: .5rem;
    margin-right: .5rem;
    width: 2.5rem;
}
</style>
