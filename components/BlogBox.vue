<template>
  <div
    class="w-full mx-auto my-8 rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg"
  >
    <div class="w-full text-center my-4 text-white text-3xl">{{$t('OURBLOGS')}}</div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto"
    >
      <article
        v-for="blog in blogs"
        :key="blog.id"
        class="bg-white p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border"
      >
        <a
          target="_self"
          href="/blog/slug"
          class="absolute opacity-0 top-0 right-0 left-0 bottom-0"
        ></a>
        <div class="relative mb-4 rounded-2xl">
          <img
            class="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            :src="blog.image"
            alt=""
          />
          
          <div
            class="flex justify-center items-center bg-cyan-800 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
          >
          {{$t('ReadArticle')}}
            <svg
              class="ml-2 w-6 h-6 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </div>
        </div>
        <div class="flex justify-between items-center w-full pb-4 mb-auto">
          <div class="flex items-center">
            <div class="pr-3">
              <img
                class="h-12 w-12 rounded-full object-cover"
                src="@/assets/images/hero.jpg"
                alt=""
              />
            </div>
            <div class="flex flex-1 text-start">
              <div class="mx-2">
                <p class="text-sm font-semibold">{{ blog.Author }}</p>
                <p class="text-sm text-gray-500">{{ $t('PublishedOn') }} 19/03/2024</p>
              </div>
            </div>
          </div>
          
        </div>
        <h3 class="font-medium text-xl leading-8">
          <span
            
            class="block relative group-hover:text-cyan-800 transition-colors duration-200"
          >
            {{ blog.header }}
        </span>
        </h3>
        <div></div>
      </article>
    </div>
  </div>
</template>
<script setup>
import blog1 from "@/assets/images/blog1.jpg"
import blog2 from "@/assets/images/blog2.jpg"
import blog3 from "@/assets/images/blog3.jpg"
const blogs = ref([
  {
    id: 1,
    header: "HOW TO VISIT THE PYRAMIDS IN EGYPT",
    image: blog1,
    Published: "19/03/2024",
    Author: "Ahmed Fakhry",
  },
  {
    id: 2,
    header: "EL NIDO PALAWAN ISLAND GUIDE",
    image: blog2,
    Published: "19/03/2024",
    Author: "Ahmed Fakhry",
  },
  {
    id: 3,
    header: "SANTORINI TRAVEL GUIDE FOR GREECE",
    image: blog3,
    Published: "19/03/2024",
    Author: "Ahmed Fakhry",
  },
]);
</script>
