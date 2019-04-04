<template lang="pug">
  .image-upload
    .flex-column.align-center
      label
        form(ref="fileform")
          input.hidden(type="file" ref="fileInput" @change="fileBrowsed")
          .flex-column.h100.justify-center
            .p10.fs25 Drag and drop
            .far.fa-copy.fs60
            .p10.fs25 Click to browse
            .file-listing(v-for="fileObj in files" :key="fileObj.metadata.id")
              .wrapper.p10(@click.prevent="")
                .flex-row.align-center.space-around
                  ImageItem(slotted :image="fileObj.metadata")
                    img(:ref="`preview-${fileObj.metadata.id}`")
                  v-btn(@click.stop.prevent="removeFile(fileObj.metadata.id)" color="error") Remove
                .flex-row.p5.align-center
                  v-text-field(v-model="fileObj.metadata.desc" :rules="[(v) => !!v || 'Description is required']" required placeholder="Description" solo)
</template>

<script>
import ImageItem from '@/components/ImageItem'

export default {
  props: {
    filesProp: Array
  },
  data() {
    return {
      dragAndDropCapable: false,
      files: [],
      uploadPercentage: 0
    }
  },
  mounted() {
    if (this.filesProp) this.files = this.filesProp
    this.dragAndDropCapable = this.determineDragAndDropCapable()
    if (this.dragAndDropCapable) {
      ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop']
        .forEach((evt) => {
          this.$refs.fileform.addEventListener(evt, (e) => {
            e.preventDefault()
            e.stopPropagation()
          })
        })
      this.$refs.fileform.addEventListener('drop', (e) => {
        for (let i = 0; i < e.dataTransfer.files.length; i += 1) {
          this.pushFile(e.dataTransfer.files[i])
        }
      })
    }
  },
  methods: {
    reduceStringSize(name) {
      const LIMIT = 20
      if (name.length > LIMIT) {
        const string = name.substring(0, LIMIT - 3)
        const format = name.split('.').pop()
        return `${string}...${format}`
      }
      return name
    },
    fileBrowsed(e) {
      const file = e.target.files[0]
      if (file) {
        this.pushFile(file)
        this.$emit('filesChanged', this.files)
      }
    },
    pushFile(file) {
      this.files.push({
        metadata: {
          id: `img-${file.lastModified}`,
          desc: '',
          featured: false
        },
        file
      })
      this.getImagePreviews()
    },
    determineDragAndDropCapable() {
      const div = document.createElement('div')
      return (('draggable' in div)
              || ('ondragstart' in div && 'ondrop' in div))
              && 'FormData' in window
              && 'FileReader' in window
    },
    getImagePreviews() {
      this.files.forEach((fileObj) => {
        const filename = fileObj.file.name
        const fileId = fileObj.metadata.id

        if (/\.(jpe?g|png|gif|bmp)$/i.test(filename)) {
          const reader = new FileReader()
          reader.addEventListener('load', () => {
            this.$refs[`preview-${fileId}`][0].src = reader.result
          })
          reader.readAsDataURL(fileObj.file)
        }
      })
    },
    removeFile(key) {
      this.files.splice(key, 1)
      this.$emit('filesChanged', this.files)
    }
  },
  components: {
    ImageItem
  }
}
</script>

<style lang="scss">
.image-upload {
  form {
    display: block;
    height: auto;
    min-height: 300px;
    border: 5px solid #bbbbbb;
    border-style: dashed;
    margin: auto;
    text-align: center;
    line-height: 1.6;
    padding: 40px;
  }
  div.file-listing {
    margin: auto;
    padding: 10px;
  }
  div.file-listing img {
    height: auto;
  }
  div.file-listing span {
    line-height: 1.5 !important;
  }
  div.wrapper {
    text-align: center;
    border: 2px solid #bbbbbb;
  }
  div.wrapper a {
    color: red;
    cursor: pointer;
  }
  a.submit-button {
    display: block;
    margin: auto;
    text-align: center;
    width: 200px;
    padding: 10px;
    text-transform: uppercase;
    background-color: #CCC;
    color: white;
    font-weight: bold;
    margin-top: 20px;
  }
}
</style>