using System;

namespace PrimeirosDesafiosEmC
{
  class Media1
  {
    static void Main(string[] args)
    {
      double A;
      double B;
      double media;
      
      A = Convert.ToDouble(Console.ReadLine());
      B = Convert.ToDouble(Console.ReadLine());
      
      media = ((A * 3.5) + (B * 7.5)) / 11;
      
      Console.WriteLine("MEDIA = " + media.ToString("F5"));
    }
  }
}