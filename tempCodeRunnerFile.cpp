#include<bits/stdc++.h>
using namesapce std;
int main(){
    vector<int>nums=[1,2,3,45,6,5,3,4,-1,22,3];
    remove(nums.begin(),nums.end(),val);
    for(auto i:nums){
        cout<<nums[i]<<endl;
    }
}