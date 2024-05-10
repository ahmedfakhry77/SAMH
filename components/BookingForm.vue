<template>
  <div
    class="rounded-xl bg-gray-800 relative bg-opacity-50 px-4 w-full lg:w-1/3 py-10 shadow-lg backdrop-blur-md backdrop-filter max-sm:px-8"
  >
    <div class="text-white">
      <div class="mb-8 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="w-16 h-16"
          fill="#fff"
        >
          <path
            d="M480 192H365.7L260.6 8.1A16 16 0 0 0 246.7 0h-65.5c-10.6 0-18.3 10.2-15.4 20.4L214.9 192H112l-43.2-57.6c-3-4-7.8-6.4-12.8-6.4H16C5.6 128-2 137.8 .5 147.9L32 256 .5 364.1C-2 374.2 5.6 384 16 384H56c5 0 9.8-2.4 12.8-6.4L112 320h102.9l-49 171.6c-2.9 10.2 4.8 20.4 15.4 20.4h65.5c5.7 0 11-3.1 13.9-8.1L365.7 320H480c35.4 0 96-28.7 96-64s-60.7-64-96-64z"
          />
        </svg>
        <h1 class="mb-2 text-2xl"> {{ $t("formHeaderOne") }}</h1>
        <span class="text-gray-300"> {{ $t("formHeaderTwo") }}</span>
      </div>
      <form>
        <div class="mb-4 text-lg grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            class="rounded-lg border-none w-full bg-transparent px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
            type="text"
            :placeholder="$t('from')"
          />
          <input
            class="rounded-lg border-none bg-transparent w-full px-6 py-2 text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
            type="text"
            name="to"
            :placeholder="$t('to')"
          />
        </div>

        <div class="mb-4 text-lg">
          
        </div>
        <div class="mb-4 text-lg grid grid-cols-1 md:grid-cols-2 gap-3">
          <DropdownComponent
            :label="$t('SelectTicketclass')"
            :showHeader="false"
            :options="Ticketclass"
            @changeFilter="SelectClass"
          />
          <DateInput  />
        </div>
        <div class="mb-4 text-lg">
          <CardRadio
            :showHeader="false"
            :options="TripTypes"
            @changeFilter="SelectClass"
          />
        </div>
        <div class="mb-4 text-lg grid grid-cols-1 md:grid-cols-2 gap-3">
          <Passengers label="adults" />
          <Passengers label="children" />
        </div>

        <div class="mt-8 flex justify-center text-lg text-black">
          <button
            type="submit"
            class="rounded-lg bg-transparent w-full px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 border border-[#86D5EA] hover:bg-cyan-800"
          >
             {{ $t("BookNow") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const CalssId = ref(null);
const TripTypeID = ref(null);
const Ticketclass = ref([
  { name: "Economy", id: 1 },
  { name: "Business", id: 2 },
  { name: "First", id: 3 },
]);
const SelectClass = (ride) => {
  CalssId.value = ride.id;
};
const TripTypes = ref([
  { name: "OneWay", id: 1 },
  { name: "RoundTrip", id: 2 },
]);
const SelectTripType = (id) => {
  TripTypeID.value = id;
};
const RideDate = ref("");
const changeDate = (date) => {
  RideDate.value = date;
};
</script>
