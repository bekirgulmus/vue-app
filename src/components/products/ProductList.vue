<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Listesi</h3>
          <hr>
          <table class="table table-hover table-striped table-bordered">
            <thead>
              <th>id</th>
              <th>Ürün Adı</th>
              <th>Adet</th>
              <th>Fiyat</th>
              <th>Açıklama</th>
            </thead>
            <tbody>
              <tr v-for="product in getProducts">
                <td>{{product.key}}</td>
                <td>{{product.title}}</td>
                <td>{{product.count}}</td>
                <td>{{product.price}}</td>
                <td>{{product.description}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  export default {
    computed: {
      ...mapGetters(['getProducts'])
    }
  }
</script>
