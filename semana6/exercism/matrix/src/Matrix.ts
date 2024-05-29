

export class Matrix {
    input: string;
  
    constructor(input: string) {
      this.input = input;
    }
  
    get rows(): number[][] {
      return this.input.split('\n').map(row => row.split(" ").map(Number));
    }
  
    get columns(): number[][] {
      const matrix = this.rows;
      const cols: number[][] = [];
      for (let i = 0; i < matrix[0].length; i++) {
        cols[i] = matrix.map(row => row[i]);
      }
      return cols;
    }
  }
  