/*
 * @Author: QYJ 
 * @Date: 2019-03-18 18:16:26 
 * @Last Modified by:   QYJ 
 * @Last Modified time: 2019-03-18 18:16:26 
 */
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (53.02%)
 * Total Accepted:    50.5K
 * Total Submissions: 95K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // //构造一个单向链表 只需要有插入功能即可
    // //Node类表示节点
    // var Node =function(element){
    //     this.element=element//表示当前节点的数据
    //     this.next=null//下一个节点数据
    // }
    // //LinkedList提供插入节点 删除节点显示列表元素的方法
    // var LList=function(){
    //      this.head=new Node('head')//头节点
    // }
    // LList.prototype={
    //     find:function(item){
    //         //当前节点等于头节点
    //         var currNode =this.head
    //         while(currNode.element!=item){
    //             currNode=currNode.next
    //         }
    //         return currNode
    //     },
    //     //向某一元素后面插入新节点
    //     insert:function(newElement,item){
    //      var newnode=new Node(newElement)
    //      var current =this.find(item)
    //      newnode.next=current.next
    //      current.next=newnode
    //     }
    // }

    //进行判断
    if(l1==null){
        return l2
    }
    if(l2==null){
        return l1
    }
    var temp =[]
    if(l1.val<l2.val){
        temp=l1
        temp.next=mergeTwoLists(l1.next,l2)
    }else{
        temp=l2
        temp.next=mergeTwoLists(l1,l2.next)
    }
    return temp
};

                                            