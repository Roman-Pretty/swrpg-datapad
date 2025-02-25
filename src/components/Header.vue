<script setup lang="ts">
  import {Download} from "lucide-vue-next";
</script>

<template>
  <nav class="navbar bg-base-100/90  shadow-sm lg:px-46 z-3
  print:hidden text-base-content sticky top-0 z-30 flex h-16 w-full justify-center backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]
  shadow-xs
  ">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"/>
          </svg>
        </div>
        <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li class="inria-sans-regular">
            <RouterLink to="/">Contents</RouterLink>
          </li>
          <li class="inria-sans-regular">
            <RouterLink to="/maneuvers">Maneuvers</RouterLink>
          </li>
          <li class="inria-sans-regular">
            <RouterLink to="/actions">Actions</RouterLink>
          </li>
          <li class="inria-sans-regular">
            <RouterLink to="/item-qualities-passive">Item Qualities (Passive)</RouterLink>
          </li>
          <li class="inria-sans-regular">
            <RouterLink to="/item-qualities-active">Item Qualities (Active)</RouterLink>
          </li>
          <li class="inria-sans-regular">
            <RouterLink to="/environment">Environment</RouterLink>
          </li>
          <li class="inria-sans-regular">
            <RouterLink to="/recovery">Recovery</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 dropdown ">
        <li class="inria-sans-regular">
          <RouterLink to="/">Contents</RouterLink>
        </li>
        <li class="inria-sans-regular">
          <RouterLink to="/maneuvers">Maneuvers</RouterLink>
        </li>
        <li class="inria-sans-regular">
          <RouterLink to="/actions">Actions</RouterLink>
        </li>
        <li class="inria-sans-regular">
          <RouterLink to="/item-qualities-passive">Item Qualities (Passive)</RouterLink>
        </li>
        <li class="inria-sans-regular">
          <RouterLink to="/item-qualities-active">Item Qualities (Active)</RouterLink>
        </li>
        <li class="inria-sans-regular">
          <RouterLink to="/environment">Environment</RouterLink>
        </li>
        <li class="inria-sans-regular">
          <RouterLink to="/recovery">Recovery</RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <ul class="menu menu-horizontal px-1 dropdown ">
        <li class="inria-sans-regular">
          <a href="/"><Download :size="16"/>Download</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
