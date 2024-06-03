<script setup>
import Hero from '../components/Hero'
import OneImageTextFlex from '../components/OneImageTextFlex.vue';
import ContactUs from '~/components/ContactUs.vue';
import { useHead,useSeoMeta } from '@unhead/vue'

const image1Url = '/images/hero/elements/centermiddle.webp';
const image2Url = '/images/hero/elements/leftmiddle (1).webp';
const image3Url = '/images/hero/elements/leftmiddleoposite (1).webp';
const image4Url = '/images/hero/elements/lefttop (1).webp';

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

// Replace placeholders with actual content
const title = 'AITS - Industrial Software Solutions And Digital Services Tailored To Your Business';
const description = 'AITS transforms businesses like yours through innovative tech solutions tailored to your unique needs. Book your free consultation call to get started!';
const ogImage = 'https://aitsmena-testtoproduction.netlify.app/aits-open-graph_v1.jpg';
const ogUrl = 'https://aitsmena-testtoproduction.netlify.app'; // Replace with your website URL

useSeoMeta({
  title,
  description,
  ogTitle: title, // Consider using the same title for consistency
  ogDescription: description,
  ogImage,
  ogUrl,
  ogType: 'website', // Recommended for most website content
  twitterTitle: title, // Consider using the same title for consistency
  twitterDescription: description,
  twitterImage: ogImage, // Assuming the same image is suitable for Twitter
  twitterCard: 'summary',
})

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      type: 'image/webp', // Assuming WebP format, adjust if needed
      href: image1Url,
    },
    {
      rel: 'preload',
      as: 'image',
      type: 'image/webp',
      href: image2Url,
    },
    {
      rel: 'preload',
      as: 'image',
      type: 'image/webp',
      href: image3Url,
    },
    {
      rel: 'preload',
      as: 'image',
      type: 'image/webp',
      href: image4Url,
    },
  ],
});
</script>
<template>
  <Hero/>
  <OneImageTextFlex sectiontitle="Mission and Vision" :item="missionandvission"/>
  <OneImageTextFlex sectiontitle="Values and Commitments" :item="valuesandcommitments" reverse/>
  <!-- <IndustriesList/> -->
  <ContactUs/>
</template>
