<template>
  <section id="testimonials">
    <section class="container text-center">
      <h2>¿Qué opinan nuestros entrenadores?</h2>
      <div class="flex flex--align-equal flex--space-between flex--lg-no-wrap">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card w-full lg:max-w-24">
            <img :src="testimonial.avatar" 
              :alt="testimonial.name" :title="testimonial.name" />
            <h3 :title="testimonial.name" class="title">{{ testimonial.name }}</h3>
            <p>
                {{ testimonial.description }}
            </p>
        </div>
      </div>
    </section>
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
          description: 'Estoy muy contento y motivado de pertener a Aguaverde. Cada semana intento que mis compañeros amen un poco más este deporte',
          social: {
              twitter: '',
              facebook: ''
          }
        },
        {
          name: 'Pablo García Traba',
          avatar: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-1/c0.0.100.100/p100x100/264710_4369701721493_428191146_n.jpg?_nc_cat=107&oh=7aaaa43ebd29d571521312b83656229d&oe=5C43C747',
          description: 'La filosofía del club encaja con mi forma de ser y así intento transmitirlo en la cancha. ¡Triatlón como filosofía de vida!',
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
    padding: calc(2.5% + var(--space)) 0;
}

#testimonials .flex > *:last-child {
    margin-bottom: 90px;
    margin-top: 90px;
}

@media(max-width:992px){
    #testimonials .flex > *:last-child{
        margin:0;
    }
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

@media(min-width:992px){ 
    .lg\:max-w-24{
        max-width:24rem
    }    
}

.testimonial-card {
    background-color: #fff;
    border-radius: .5rem;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,.11), 0 5px 15px 0 rgba(0,0,0,.08);
    /*
    display: flex;
    flex-wrap: wrap;
    */
    margin-bottom: 5rem;
    margin-top: 5rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 2rem;
    text-align: center;
}
.testimonial-card>.title {
    color: #5e527f;
    font-size: 1.625rem;
    font-weight: 400;
    margin-bottom: .75rem;
}
.testimonial-card>p {
    line-height: 1.5;
    margin-bottom: 1rem;
}
.testimonial-card>img {
    border: 9px solid #fff;
    border-radius: 9999px;
    height: 8rem;
    margin: -4rem auto .5rem;
    width: 8rem;
}
.testimonial-card ul.socials {
    align-self: flex-end;
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
}
.testimonial-card ul.socials>li {
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
