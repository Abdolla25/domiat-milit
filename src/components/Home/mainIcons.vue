<template>
  <div class="container">
      <div class="row">
          <div v-for="(mainIcon, index) in mainIcons" :key="index" class="col-lg-4 main-icons">
              <i :class="mainIcon.faIcon"></i>
              <h2>
                  {{ mainIcon.heading }}
                </h2>
              <p>
                  {{ mainIcon.text }}
              </p>
              <p>
                  <b-button variant='primary' :href="mainIcon.btnLink">
                      {{ mainIcon.btnText }}
                  </b-button>
              </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'mainIcons',
    data() {
        return {
            mainIcons: [
                {
                    faIcon: 'fa fa-user-md',
                    heading: 'العيادات الخارجية',
                    text: 'تتميز العيادات الخارجية لدينا بتغطية جميع التخصصات الطبية والجراحية.',
                    btnText: 'عرض التفاصيل',
                    btnLink: 'outpatient'
                },
                {
                    faIcon: 'fa fa-clock-o',
                    heading: 'مواعيد العمل',
                    text: 'نعمل 24 ساعة يومياً في الطوارئ والاستقبال على مدار الأسبوع',
                    btnText: 'عرض المواعيد',
                    btnLink: 'timetable'
                },
                {
                    faIcon: 'fa fa-phone',
                    heading: 'تواصل معنا',
                    text: 'يمكنك التواصل معنا على مدار الساعة للاستعلام عن طريق الاتصال على الرقم 2402556-057',
                    btnText: 'اتصل بنا',
                    btnLink: 'tel:0572402556'
                },
            ]
        }
    },
}
</script>

<style>
.col-lg-4 {
    margin-bottom: 1.5rem;
    text-align: center;
}
.col-lg-4 p {
    margin-right: 0.75rem;
    margin-left: 0.75rem;
}
.main-icons i {
    font-size: 8rem;
    color: #223369;
}

</style>