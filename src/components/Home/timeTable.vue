<template>
    <div class="container">
        <div class="row">
            <h2 style="text-align:right" class="w-100 mb-5" id="time-table">مواعيد العيادات<span class="text-muted"> الخارجية</span></h2>
            <b-card no-body class="w-100">
                <b-tabs pills card active-nav-item-class="btn-primary">
                    <b-tab v-for="(tab,index) in tabs" :key="index" :title="tab.clinicTitle">
                        <b-card-text>
                            <table style="text-align:center" class="table table-striped table-bordered align-middle">
                                <tfoot>
                                    <tr>
                                        <th scope="col" colspan="6" style="text-align: center;">
                                            {{ footText }}
                                            <span class="text-muted">{{ footNote }}</span>
                                        </th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr v-for="(clinicTime, index) in tab.clinicTimes" :key="index">
                                        <th >{{ clinicTime.day }}</th>
                                        <td> {{ clinicTime.doctor }} <br><span class="text-muted">{{ clinicTime.specialize }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-card-text>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'timeTable',
    data() {
        return {
            footText: 'الحجز يبدأ من 8 صباحاً بالمستشفى |',
            footNote: '| غير متوفر الحجز عن طريق التليفون',
            tabs: [
                {
                    clinicTitle: 'عيادة الباطنة',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'د. مصطفى الخواجه',
                            specialize: 'استشاري الباطنة',
                        },
                        {
                            day: '',
                            doctor: 'د. باسم زايد',
                            specialize: 'أخصائي الباطنة',
                        },
                        {
                            day: 'الأحد',
                            doctor: 'د. مصطفى الخواجه',
                            specialize: 'استشاري الباطنة',
                        },
                        {
                            day: 'الإثنين',
                            doctor: 'د. إيهاب عبدالعال',
                            specialize: 'أخصائي كبد وجهاز هضمي',
                        },
                        {
                            day: 'الثلاثاء',
                            doctor: 'د. إيهاب عبدالعال',
                            specialize: 'أخصائي كبد وجهاز هضمي',
                        },
                        {
                            day: 'الأربعاء',
                            doctor: 'د. محمود شريف',
                            specialize: 'أخصائي جهاز هضمي ومناظير',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة الجهاز الهضمي',
                    clinicTimes: [
                        {
                            day: 'الإثنين',
                            doctor: 'د. محمد حيزة',
                            specialize: 'استشاري كبد وجهاز هضمي ومناظير',
                        },
                        {
                            day: 'الأربعاء',
                            doctor: 'أ د. سعد الدين الشريف',
                            specialize: 'استشاري كبد وجهاز هضمي ومناظير',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة الأسنان',
                    clinicTimes: [
                        {
                            day: '-',
                            doctor: 'يومياً من السبت إلى الأربعاء',
                            specialize: '',
                        },
                        {
                            day: 'السبت',
                            doctor: 'د. مجدي حسونة',
                            specialize: '',
                        },
                        {
                            day: 'الأربعاء',
                            doctor: 'د. مجدي حسونة',
                            specialize: '',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة الرمد',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'د. نسرين البلتاجي',
                            specialize: 'أخصائي الرمد',
                        },
                        {
                            day: 'الأحد',
                            doctor: 'د. إسلام مدحت',
                            specialize: 'أخصائي الرمد',
                        },
                        {
                            day: 'الإثنين',
                            doctor: 'د. حسام فهمي',
                            specialize: 'أخصائي الرمد',
                        },
                        {
                            day: 'الثلاثاء',
                            doctor: 'د. محمد عاصم',
                            specialize: 'أخصائي الرمد',
                        },
                        {
                            day: 'الأربعاء',
                            doctor: 'د. محمد عاطف العشماوي',
                            specialize: 'استشاري الرمد',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة القلب',
                    clinicTimes: [
                        {
                            day: 'الأحد',
                            doctor: 'د. هاني مهنى',
                            specialize: 'أخصائي أمراض القلب',
                        },
                        {
                            day: 'الإثنين',
                            doctor: 'د. معتز هاشم',
                            specialize: 'أخصائي أمراض القلب',
                        },
                        {
                            day: 'الثلاثاء',
                            doctor: 'د. وسيم عمر',
                            specialize: 'استشاري أمراض القلب',
                        },
                        {
                            day: 'الأربعاء',
                            doctor: 'د. حسام الجمل',
                            specialize: 'أخصائي أمراض القلب',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة الإيكو',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'د. نادية مصباح',
                            specialize: '',
                        },
                        {
                            day: 'الأحد',
                            doctor: 'د. وسيم عمر',
                            specialize: '',
                        },
                        {
                            day: 'الإثنين',
                            doctor: 'د. وسيم عمر',
                            specialize: '',
                        },
                        {
                            day: 'الثلاثاء',
                            doctor: 'د. حسام الجمل',
                            specialize: '',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة الأطفال',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'د. رانيا نشأت',
                            specialize: '',
                        },
                        {
                            day: 'الأربعاء',
                            doctor: 'د. رانيا نشأت',
                            specialize: '',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة الجلدية',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'د. عمرو شبكة',
                            specialize: 'أخصائي الأمراض الجلدية',
                        },
                        {
                            day: 'الأحد',
                            doctor: 'د. ماجدة كامل',
                            specialize: 'استشاري الأمراض الجلدية',
                        },
                        {
                            day: 'الإثنين',
                            doctor: 'د. جابر عوض',
                            specialize: 'استشاري الأمراض الجلدية',
                        },
                        {
                            day: 'الثلاثاء',
                            doctor: 'د. نرمين محمد الوسيه',
                            specialize: 'أخصائي الأمراض الجلدية',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة النساء والتوليد',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'د. سلوى سمير عنتر',
                            specialize: 'استشاري النساء والتوليد',
                        },
                        {
                            day: 'الأحد',
                            doctor: 'د. ثروت صقر',
                            specialize: 'استشاري النساء والتوليد',
                        },
                        {
                            day: 'الإثنين',
                            doctor: 'د. ريهام الطرابيلي',
                            specialize: 'أخصائي النساء والتوليد',
                        },
                        {
                            day: 'الثلاثاء',
                            doctor: 'د. سلوى سمير عنتر',
                            specialize: 'استشاري النساء والتوليد',
                        },
                        {
                            day: 'الأربعاء',
                            doctor: 'د. محمد مجاهد',
                            specialize: 'أخصائي النساء والتوليد',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة الأنف والأذن والحنجرة',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'نقيب ط. ندى زكريا',
                            specialize: 'أخصائي الأنف والأذن',
                        },
                        {
                            day: 'الأحد',
                            doctor: 'د. دينا شمس الدين',
                            specialize: 'أخصائي الأنف والأذن',
                        },
                        {
                            day: 'الإثنين',
                            doctor: 'نقيب ط. ندى زكريا',
                            specialize: 'أخصائي الأنف والأذن',
                        },
                        {
                            day: 'الثلاثاء',
                            doctor: 'نقيب ط. ندى زكريا',
                            specialize: 'أخصائي الأنف والأذن',
                        },
                        {
                            day: 'الأربعاء',
                            doctor: 'نقيب ط. ندى زكريا',
                            specialize: 'أخصائي الأنف والأذن',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة الجراحة العامة',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'د. بهاء الدين شنب',
                            specialize: 'أخصائي الجراحة العامة',
                        },
                        {
                            day: 'الأحد',
                            doctor: 'د. جمال التابعى الفار',
                            specialize: 'استشاري الجراحة العامة',
                        },
                        {
                            day: 'الإثنين',
                            doctor: 'د. محمد صلاح نعمان',
                            specialize: 'أخصائي الجراحة العامة',
                        },
                        {
                            day: 'الثلاثاء',
                            doctor: 'عقيد ط. سمير عبدالعاطى',
                            specialize: 'استشاري الجراحة العامة',
                        },
                        {
                            day: 'الأربعاء',
                            doctor: 'عقيد ط. محمد عوض',
                            specialize: 'استشاري الجراحة العامة',
                        },
                        {
                            day: 'الخميس',
                            doctor: 'أ د. أحمد سلامة صيوح',
                            specialize: 'استشاري الجراحة العامة',
                        },
                        {
                            day: '',
                            doctor: 'د. محمد أبو الخير',
                            specialize: 'أخصائي الجراحة العامة',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة جراحة العظام',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'د. شادي جودة',
                            specialize: 'أخصائي العظام والعمود الفقري',
                        },
                        {
                            day: 'الأحد',
                            doctor: 'د. طارق سليم',
                            specialize: 'استشاري العظام والعمود الفقري',
                        },
                        {
                            day: '',
                            doctor: 'د. أحمد العبد',
                            specialize: 'أخصائي العظام والعمود الفقري',
                        },
                        {
                            day: 'الإثنين',
                            doctor: 'د. احمد ابوعطيه ',
                            specialize: 'استشاري جراحة العظام',
                        },
                        {
                            day: 'الثلاثاء',
                            doctor: 'د. عثمان الشريف',
                            specialize: 'استشاري جراحة العظام',
                        },
                        {
                            day: '',
                            doctor: 'د. طارق سليم',
                            specialize: 'استشاري العظام والعمود الفقري',
                        },
                        {
                            day: 'الأربعاء',
                            doctor: 'د. محمد صبري',
                            specialize: 'أخصائي العظام والعمود الفقري',
                        },
                        {
                            day: '',
                            doctor: 'د. محمود العتباني',
                            specialize: 'أخصائي العظام والعمود الفقري',
                        },
                        {
                            day: 'الخميس',
                            doctor: 'د. أشرف العزب',
                            specialize: 'استشاري جراحة العظام والمفاصل وإصابة الملاعب',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة جراحة التجميل',
                    clinicTimes: [
                        {
                            day: 'الإثنين',
                            doctor: 'د. احمد مخاريطه',
                            specialize: 'أخصائي جراحة التجميل وزراعة الشعر',
                        },
                        {
                            day: 'الأربعاء',
                            doctor: 'د. احمد مخاريطه',
                            specialize: 'أخصائي جراحة التجميل وزراعة الشعر',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة المخ والأعصاب',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'د. حاتم السمولى',
                            specialize: 'استشارى جراحات المخ والاعصاب والعمود الفقرى',
                        },
                        {
                            day: 'الأحد',
                            doctor: 'د. محمد الشافعى',
                            specialize: 'أخصائى  جراحات المخ والاعصاب  ',
                        },
                        {
                            day: 'الأربعاء',
                            doctor: 'د. أحمد المنسى',
                            specialize: 'أخصائى المخ والاعصاب والطب  النفسى',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة جراحة الأطفال',
                    clinicTimes: [
                        {
                            day: 'الإثنين',
                            doctor: 'د. أحمد صلاح',
                            specialize: 'أخصائي جراحة الأطفال',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة جراحة الأوعية الدموية',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'د. عمرو احمد عبدالبارى',
                            specialize: 'اخصائى  جراحه الاوعيه والقسطرة التداخليه',
                        },
                        {
                            day: 'الثلاثاء',
                            doctor: 'د. محمد شبانه',
                            specialize: 'استشاري جراحة الاوعيه',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة الروماتيزم',
                    clinicTimes: [
                        {
                            day: 'الإثنين',
                            doctor: 'أ د. اشرف عبد السلام',
                            specialize: 'استشارى الروماتيزم',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة الصدر والحساسية',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'د. عاطف وهدان',
                            specialize: 'استشارى الصدر والحساسية',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة الكلى والغدد الصماء والسكر',
                    clinicTimes: [
                        {
                            day: 'الأربعاء',
                            doctor: 'د. احمد سلامة العدل',
                            specialize: 'استشارى الباطنة والكلى',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة جراحة الأورام',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'د. سامح البوهى',
                            specialize: 'استشاري اورام',
                        },
                        {
                            day: 'الثلاثاء',
                            doctor: 'د. خالد جاب الله',
                            specialize: 'استشاري اورام',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة التغذية',
                    clinicTimes: [
                        {
                            day: 'الأحد',
                            doctor: 'د. محمد حلمى',
                            specialize: 'استشارى التغذية العلاجية',
                        },
                        {
                            day: 'الثلاثاء',
                            doctor: 'د. أحمد صادق',
                            specialize: 'أخصائي التغذية العلاجية',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة الكلى',
                    clinicTimes: [
                        {
                            day: 'الإثنين',
                            doctor: 'د. داليا مقلد',
                            specialize: 'اخصائى الباطنة والكلى',
                        },
                        {
                            day: 'الأربعاء',
                            doctor: 'د. احمد سلامة العدل',
                            specialize: 'استشارى الباطنة والكلى',
                        },
                    ]
                },
                {
                    clinicTitle: 'عيادة المسالك البولية',
                    clinicTimes: [
                        {
                            day: 'السبت',
                            doctor: 'أ د. محمود فوزى',
                            specialize: 'استشارى المسالك البولية',
                        },
                        {
                            day: 'الأحد',
                            doctor: 'د. احمد العريف',
                            specialize: 'أخصائي المسالك البولية',
                        },
                        {
                            day: 'الإثنين',
                            doctor: 'د. يوسف أبو العزم',
                            specialize: 'أخصائي المسالك البولية',
                        },
                        {
                            day: 'الثلاثاء',
                            doctor: 'أ د. عادل موسى',
                            specialize: 'استشارى المسالك البولية',
                        },
                    ]
                },
            ]
        }
    }
}
</script>

<style>
li.nav-item {text-align: center}
th{vertical-align: middle!important}
</style>