<script setup>
import Hero from '../components/Hero'
import OneImageTextFlex from '../components/OneImageTextFlex.vue';
import ContactUs from '~/components/ContactUs.vue';
const missionandvission =
  {
    title: "A Vision In Sight",
    description: "AITS strives to be the leading industrial software innovator in the Gulf region. How? By delivering cutting-edge software solutions and exceptional customer experiences. It takes a thrill for innovation and excellence to empower organizations in reaching new heights of success.",
    image: "/images/hero/missionandvision/vision.webp",
}
const valuesandcommitments =
{
  title: "You Have Our Word",
  description: "No company can operate without a set of core values that shape its culture and defines who it is. As for us? We believe in integrity, collaboration, and continuous improvement. Our commitment to enhance positive transformation in the industrial landscape creates an environment where our dedicated team can thrive. This enables us to better serve our clients and contribute to a brighter, more sustainable future.",
  image: "/images/hero/values/values.webp",
}

</script>
<template>
   <head>
    <meta name="image" property="og:image" content="https://aitsmena-testtoproduction.netlify.app/aits-open-graph.png">
    <title>AITS - Industrial Software Solutions And Digital Services Tailored To Your Business</title>
    <meta property="og:title" content="AITS - Industrial Software Solutions And Digital Services Tailored To Your Business">
    <meta property="og:description" content="AITS transforms businesses like yours through innovative tech solutions tailored to your unique needs. Book your free consultation call to get started!">
    <meta property="description" content="AITS transforms businesses like yours through innovative tech solutions tailored to your unique needs. Book your free consultation call to get started!">
  </head>
  <Hero/>
  <OneImageTextFlex sectiontitle="Mission and Vision" :item="missionandvission"/>
  <OneImageTextFlex sectiontitle="Values and Commitments" :item="valuesandcommitments" reverse/>
  <!-- <IndustriesList/> -->
  <ContactUs/>
</template>
