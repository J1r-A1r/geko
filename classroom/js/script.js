class Shenq{
    constructor(MutqeriQanak){
        this.mutqer = MutqeriQanak
    }
}
class ShenqiHarker extends Shenq{
    constructor(MutqeriQanak, ShenqiHarker, ShenqiBnakaranneriQanakHarkum){
    super(MutqeriQanak)
    this.hark = ShenqiHarker
    this.bnakaran = ShenqiBnakaranneriQanakHarkum
    }
}
class Senyak extends ShenqiHarker{
    constructor(MutqeriQanak, ShenqiHarker, ShenqiBnakaranneriQanakHarkum, BnakaraniHamar, Senyak, ArastaghiBardzrutyun){
    super(MutqeriQanak, ShenqiHarker)
        this.bnakaraniqanak = ShenqiBnakaranneriQanakHarkum
        this.BnakaraniHamar = BnakaraniHamar
        this.Senyak = Senyak
        this.ArastaghiBardzrutyun = ArastaghiBardzrutyun
    }
}