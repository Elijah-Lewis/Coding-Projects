#include <iostream>
using namespace std;

void bubble_sort(int *a, int n){
    //phase 1
    bool swapped = false;
    for (int j = 0; j < n; j++){
        for (int i = 0; i < n - 1; i++){
            if (a[i] > a[i + 1]){
                swap(a[i], a[i + 1]);
                swapped = true;
            }
        }

        for (int i = 0; i < n; i++){
            cout << a[i] << " ";
        }
        cout << endl;

        if (swapped == false){
            break;
        }
    }
}

int main(){
    int a[] = {6, 4, 3, 10, 2, 1, 11};

    int n = sizeof(a) / sizeof(int);

    for (int i = 0; i < n; i++){
        cout << a[i] << " ";
    }
    cout << endl;

    bubble_sort(a, n);
    return 0;
}