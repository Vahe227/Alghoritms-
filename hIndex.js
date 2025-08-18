// Problem

// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

// Example 1:

// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
// Example 2:

// Input: citations = [1,3,1]
// Output: 1

// How I Solve This Problem

// To solve this problem, I first reviewed the definition of the H-index. The H-index is a metric designed to measure a researcher’s productivity and impact based on their published papers 
// and the number of citations those papers have received.The algorithm works as followsWe start with an initial counter (beginning at 1).Then, we iterate over the list of citation counts.
// At each step, we compare the current counter with the number of citationsIf the number of citations is less than the counter, the process stops, and we return the counter minus one.Otherwise, 
// the counter is incremented by 1 for the next iteration.This way, the algorithm identifies the largest value h such that the researcher has at least h papers with h or more citations each.
// he time complexity of this approach is O(N), since it iterates through the citation list once. This linear time complexity makes the solution efficient and well-suited for this type of problem.
// The problem is still under development, as certain cases may not be fully handled yet (e.g., when the citation list is not sorted, or when all citations are either extremely low or extremely high).

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a);
    let count = 1;
    for(let i = 0; i < citations.length;i++) {
        if(citations[i] >= count) {
            count++; 
        } else {
            break;
        };
    };
    return count - 1;
};