<template>
    <header>
        <b-navbar toggleable="lg" type="light" class="fixed-top bg-light">
            <b-navbar-brand href="/" class="mx-2">
                <router-link to="/" class="navbar-brand">
                    <img id="logo" src="@/assets/logoHQ.png" alt="المستشفى العسكري بدمياط الجديدة">
                </router-link>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <span v-for="menuItem in menuItems" :key="menuItem.id">
                        <b-nav-item-dropdown v-if="menuItem.hasSub" :href="menuItem.routerLink" :text="menuItem.content">
                                <b-dropdown-item :href="subMenuItem.routerLink" v-for="(subMenuItem, index) in menuItem.sub" :key="index">
                                    {{ subMenuItem.content }}
                                </b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item v-else-if="!menuItem.hasSub" :href="menuItem.routerLink">
                            {{ menuItem.content }}
                        </b-nav-item>
                    </span>
                </b-navbar-nav>
                <b-navbar-nav class="mx-2">
                    <b-nav-form>
                        <b-form-input class="mr-sm-2 me-2" placeholder="بحث في الموقع"></b-form-input>
                        <b-button variant="outline-primary" class="my-2 my-sm-0" type="submit">بحث</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        toggleMenu: function (event) {
            alert(menuItem.hasSub)
        } 
    },
    data: function(){
        return {
            menuItems: [
                {
                    id: 0,
                    content: 'عن المستشفى',
                    routerLink: '#',
                    hasSub: true,
                    sub: [
                        {
                            content: 'نظرة عامة',
                            routerLink: 'overview',
                        },
                        {
                            content: 'رسالتنا ورؤيتنا',
                            routerLink: 'our-vision',
                        },
                        {
                            content: 'مجلس الإدارة',
                            routerLink: 'board',
                        },
                    ],
                },
                {
                    id: 1,
                    content: 'الخدمات الطبية',
                    routerLink: '#',
                    hasSub: true,
                    sub: [
                        {
                            content: 'قسم العلاج الطبيعي',
                            routerLink: 'physical-therapy-department',
                        },
                        {
                            content: 'قسم الغسيل الكلوي',
                            routerLink: 'dialysis-department',
                        },
                        {
                            content: 'قسم المناظير',
                            routerLink: 'endoscopy-department',
                        },
                        {
                            content: 'قسم الحضانات وحديثي الولادة',
                            routerLink: 'nursery-newborn-department',
                        },
                        {
                            content: 'قسم الداخلي والحجز',
                            routerLink: 'in-patient-department',
                        },
                        {
                            content: 'قسم الاستقبال والطوارئ',
                            routerLink: 'emergency-department',
                        },
                        {
                            content: 'قسم الرعاية المركزة',
                            routerLink: 'icu-department',
                        },
                        {
                            content: 'قسم العمليات',
                            routerLink: 'operations-department',
                        },
                        {
                            content: 'قسم المعمل',
                            routerLink: 'laboratory-department',
                        },
                        {
                            content: 'قسم الأشعة',
                            routerLink: 'radiology-department',
                        },
                        {
                            content: 'قسم العزل',
                            routerLink: 'isolation-department',
                        },
                    ],
                },
                {
                    id: 2,
                    content: 'العيادات الخارجية',
                    routerLink: '#',
                    hasSub: true,
                    sub: [
                        {
                            content: 'عيادة أمراض الصدر والحساسية',
                            routerLink: 'chest-clinic',
                        },
                        {
                            content: 'عيادة الأمراض النفسية والعصبية',
                            routerLink: 'psychiatric-clinic',
                        },
                        {
                            content: 'عيادة الغدد الصماء',
                            routerLink: 'endocrinology-clinic',
                        },
                        {
                            content: 'عيادة الروماتيزم',
                            routerLink: 'rheumatology-clinic',
                        },
                        {
                            content: 'عيادة التغذية',
                            routerLink: 'nutrition-clinic',
                        },
                        {
                            content: 'عيادة الأمراض الجلدية والتناسلية',
                            routerLink: 'dermatology-clinic',
                        },
                        {
                            content: 'عيادة الأطفال',
                            routerLink: 'pediatric-clinic',
                        },
                        {
                            content: 'عيادة الأنف والأذن والحنجرة',
                            routerLink: 'ent-clinic',
                        },
                        {
                            content: 'عيادة جراحة المخ والأعصاب',
                            routerLink: 'neurosurgery-clinic',
                        },
                        {
                            content: 'عيادة الرمد',
                            routerLink: 'ophthalmology-clinic',
                        },
                        {
                            content: 'عيادة جراحة العظام',
                            routerLink: 'orthopedic-clinic',
                        },
                        {
                            content: 'عيادة القلب والإيكو',
                            routerLink: 'heart-clinic',
                        },
                        {
                            content: 'عيادة الأسنان',
                            routerLink: 'dental-clinic',
                        },
                        {
                            content: 'عيادة النساء والتوليد',
                            routerLink: 'gynecology-obstetrics-clinic',
                        },
                        {
                            content: 'عيادة السونار',
                            routerLink: 'ultrasound-clinic',
                        },
                        {
                            content: 'عيادة الكلى والجهاز الهضمي',
                            routerLink: 'gastroenterology-clinic',
                        },
                        {
                            content: 'عيادة الباطنة',
                            routerLink: 'internal-medicine-clinic',
                        },
                        {
                            content: 'عيادة المسالك',
                            routerLink: 'urology-clinic',
                        },
                        {
                            content: 'عيادة الجراحة العامة',
                            routerLink: 'surgery-clinic',
                        },
                        {
                            content: 'عيادة جراحة الأوعية الدموية',
                            routerLink: 'vascular-clinic',
                        },
                        {
                            content: 'عيادة التجميل وتساقط الشعر',
                            routerLink: 'cosmetic-clinic',
                        },
                    ],
                },
                {
                    id: 3,
                    content: 'مواعيد العمل',
                    routerLink: '#time-table',
                    hasSub: false,
                    sub: -1,
                },
                {
                    id: 4,
                    content: 'تواصل معنا',
                    routerLink: 'contact-us',
                    hasSub: false,
                    sub: -1,
                },
            ],
        }
    }
}
</script>

<style>
.dropdown-item {text-align: right}
.dropdown-item:hover {background-color: #2233693a}
.dropdown-item:active {background-color: #e51f25}
.navbar-nav{align-items: flex-start}
@media (min-width: 992px) {.navbar-expand-lg .navbar-collapse {justify-content: space-between;}}
.navbar-brand img {max-height: 100px}
.nav-item a span {margin-left: 0.5rem;}
</style>