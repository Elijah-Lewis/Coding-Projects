#include <iostream>
using namespace std;

int bin_search(int *a,int k, int lo, int hi){
    int half = (lo + hi) / 2;
    if (lo > hi){
        return -1;
    }
    else if (k == a[half]){
        return half;
    }
    if (k > a[half]){
        return bin_search(a, k, half + 1, hi);
    }
    else if (k < a[half]){
        return bin_search(a, k, lo, half - 1);
    }
    else{
        return -1;
    }
}

int main (){
    int a[] = {3, 5, 6, 8, 11, 13, 20};
    int n = sizeof(a) / sizeof(int);

    int r = bin_search(a, 6, 0, n-1);
    cout << r << endl;
    return 0;
}