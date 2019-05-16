object Codewars {


  def persistence(n: Int,m:Int=0): Int = {
    if (n <10) return m
    persistence(n.toString.map(_.asDigit).reduce((a,b)=>a*b),m+1)
  }

  def reverseLetter(str: String): String = {
    str.filter(_.isLetter).reverse
  }



  def main(args: Array[String]): Unit = {
    println(persistence(999))
  }

}
