#include <iostream>
using namespace std;

void merge(int *a, int *b, int i, int j, int k){
    int p = i;
    int q = j;
    int s = i; //this is the original value of i

    while (i < q - 1 && j <= k){
        if (a[i] < a[j]) {
            b[p] = a[i];
            i++;
        }
        else{
            b[p] = a[j];
            j++;
        }
        p++;
    }

    //i > j-1 or j > k
    //copy the rest to b
    while (i <= q-1){
        b[p++] = a[i++];
    }
    while (j <= k){
        b[p++] = a[j++];
    }
    for (j = s; j <= k; j++){
        a[j] = b[j];
    }
}

void merge_sort(int *a, int *b, int lo, int hi) {
    if (lo == hi){
        return;
    }
    int mid = (lo + hi / 2);
    merge_sort(a, b, lo, mid); //first half is sorted from index lo to mid
    merge_sort(a, b, mid + 1, hi); //second half is sorted from index mid + 1 to hi
    merge(a, b, lo, mid + 1, hi);
}

int main(){
    int a[] = {15, 2, 9, 10, 3, 4, 5, 7, 2};
    int n = sizeof(a) / sizeof(int);
    int *b = new int [n];

    for (int i = 0; i < n; i++){
        cout << a[i] << " ";
    }
    cout << endl;
    merge(a, b, 1, 4, 7);
    for (int i = 0; i < n; i++){
        cout << a[i] << " ";
    }
    cout << endl;
}

