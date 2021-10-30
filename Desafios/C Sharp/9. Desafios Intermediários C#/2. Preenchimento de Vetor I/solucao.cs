using System;

namespace DesafiosIntermediariosC {
  class PreenchimentoDeVetorI {
    static void Main(string[] args) {
      int N = int.Parse(Console.ReadLine());
      int[] vetor = new int[10];
  
      for (int i = 0; i < 10; i++) {
        vetor[i] = N;
        N *= 2;
      }
  
      for (int i = 0; i < 10; i++) {
        Console.WriteLine("N[" + i + "] = " + vetor[i]);
      }
    }
  }
}