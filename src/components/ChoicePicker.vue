<template>
  <div class="picker-container">
    <h3>還在猶豫嗎?幫您選擇旅行地</h3>
    <p>輸入有興趣的目的地，並用 ',' 隔開,輸入完成請按Enter</p>
    <textarea placeholder="enter choices" id="textarea" />
    <div id="tags"></div>
  </div>
</template>

<script>
export default {
  name: "ChoicePicker",
  mounted() {
    const textarea = document.getElementById("textarea");
    textarea.focus();
    textarea.addEventListener("keyup", (e) => {
      this.createTags(e.target.value);
      if (e.key === "Enter") {
        setTimeout(() => {
          e.target.value = "";
        }, 10);
        this.randomSelect();
      }
    });
  },
  methods: {
    createTags(input) {
      const tagsEl = document.getElementById("tags");
      const tags = input
        .split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim());
      tagsEl.innerHTML = "";
      tags.forEach((tag) => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
      });
    },
    randomSelect() {
      const times = 30;
      const intreval = setInterval(() => {
        const randomTag = this.pickRandomTag();

        this.highLightTag(randomTag);
        setTimeout(() => {
          this.unhighLightTag(randomTag);
        }, 100);
      }, 100);
      setTimeout(() => {
        clearInterval(intreval);
        setTimeout(() => {
          const randomTag = this.pickRandomTag();
          this.highLightTag(randomTag);
        }, 100);
      }, times * 100);
    },
    pickRandomTag() {
      const tags = document.querySelectorAll(".tag");
      return tags[Math.floor(Math.random() * tags.length)];
    },
    highLightTag(tag) {
      tag.classList.add("highlight");
    },
    unhighLightTag(tag) {
      tag.classList.remove("highlight");
    },
  },
};
</script>

<style lang="scss" >
.picker-container {
  max-width: 500px;
  margin: 80px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 20%);
  padding: 30px;
  border-radius: 20px;
  color: gray;
}
.picker-container textarea {
  border: none;
  display: block;
  width: 100%;
  height: 100px;
}
.picker-container p {
  margin: 10px 0;
}
.tag {
  display: inline-block;
  background-color: #ffc44f;
  color: #fff;
  border-radius: 10px;
  padding: 4px 10px;
  margin: 6px 4px;
  font-size: 14px;
}
.tag.highlight {
  background-color: #66a1ff;
}
textarea:focus {
  outline: 1px solid gray;
}
</style>