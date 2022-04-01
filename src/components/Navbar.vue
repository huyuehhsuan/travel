<template>
  <div class="nav">
    <div class="nav-btn">
      <label for="nav-check" class="nav-button"> click </label>
    </div>
    <div class="nav-links">
      <router-link to="/" class="nav-item">Home</router-link>

      <a href="#" class="nav-item">Aobut</a>
      <a href="#" class="nav-item">Contact</a>
      <a href="#" class="nav-item">Contact</a>
      <a href="#" class="nav-item">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrollNum: 0,
    };
  },
  mounted() {
    const nav = document.querySelector(".nav");
    window.addEventListener("scroll", () => {
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.scrollNum = top;
      if (top >= 100) {
        nav.classList.add("fix");
      } else {
        nav.classList.remove("fix");
      }
    });
    const navButton = document.querySelector(".nav-button");
    const navLinks = document.querySelector(".nav-links");
    navButton.addEventListener("click", () => {
      let open = document.querySelector(".nav-links.open");
      if (open) {
        open.className = "nav-links close";
      }
      if (open == null) {
        navLinks.classList.add("open");
      }
    });
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navLinks.classList.add("close");
      });
    });
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  width: 100%;
  position: fixed;
  position: fixed;
  z-index: 100;
  transition: 0.5s;
  opacity: 1;
  padding: 1rem 2rem;
}

.nav > .nav-btn {
  display: none;
}

.nav-item {
  padding: 0.5rem;
  margin: 0 10px;
  border-bottom: 2px solid transparent;
}

.nav-item:hover {
  color: rgb(59, 59, 59);
  border-bottom: 2px solid gray;
}

.fix {
  opacity: 0.8;
}

@media (max-width: 600px) {
  .fix {
    opacity: 1;
  }
  .nav-item {
    padding: 0.8rem;
  }
  .nav > .nav-btn {
    width: 100%;
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
    background-color: #fff;
  }
  .nav > .nav-btn > .nav-button {
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-top: 2px solid #eee;
    margin-left: auto;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
    background-color: #fff;
  }
  .nav > .nav-links > .nav-item {
    display: block;
  }
  .close {
    height: 0px !important;
  }
  .open {
    height: calc(100vh - 50px) !important;
    overflow-y: auto !important;
  }
}
</style>