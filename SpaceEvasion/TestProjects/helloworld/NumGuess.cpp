#include <iostream> 
using namespace std;

//take in the guess and return if it's higher, lower, or equal
//return <0 when guess is bigger, >0 when guess is smaller, 0 when equal
int query (int k){
    const int num = 1;
    cout << "guess is: " << k << endl;
    cout << "nuk - k: " << num-k << endl;
    return num-k;
}

//find the number in the range from lo to hi and return it
int guess(int lo, int hi){
    int m = (lo + hi) / 2;
    int k = query(m);

    if (k == 0){
        return m;
    }
    else if (k < 0){
        return guess(lo, m - 1);
    }
    else{
        return guess(m + 1, hi);
    }
    return 0;
}

int main (){
    cout << guess(1, 10) << endl;
    return 0;
}