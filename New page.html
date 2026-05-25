import { useState } from "react";

const RECURSION_TEMPLATE = `def solve(problem):
# 1. BASE CASE â€” smallest problem you can answer directly
if is_smallest(problem):
return base_answer

# 2. RECURSIVE CASE â€” break into smaller subproblem
smaller = make_smaller(problem)
sub_result = solve(smaller)

# 3. COMBINE â€” build answer from subproblem result
return combine(sub_result, problem)`;

const BACKTRACK_TEMPLATE = `def backtrack(path, choices):
# BASE CASE â€” path is complete
if is_complete(path):
results.append(path[:]) # snapshot
return

for choice in choices:
# CHOOSE
path.append(choice)
remaining = choices - {choice}

# EXPLORE
backtrack(path, remaining)

# UNCHOOSE (backtrack)
path.pop()`;

const DIVCONQ_TEMPLATE = `def divide_conquer(arr, lo, hi):
# BASE CASE
if lo >= hi:
return base_value

# DIVIDE
mid = (lo + hi) // 2

# CONQUER
left = divide_conquer(arr, lo, mid)
right = divide_conquer(arr, mid+1, hi)

# COMBINE
return merge(left, right)`;

const TREE_TEMPLATE = `def dfs(node):
# BASE CASE â€” null node
if not node:
return base_value

# RECURSE on children
left = dfs(node.left)
right = dfs(node.right)

# COMBINE â€” postorder
return combine(node.val, left, right)`;

const phases = [
{
id: 1,
title: "Phase 1 â€” The Recursion Mindset",
subtitle: "Trust the recursion. Define base & recursive case.",
color: "#a78bfa",
bg: "#0d0820",
steps: [
"Identify the base case (smallest valid input)",
"Assume recursion works for n-1",
"Use that result to build answer for n",
"Never trace the full call stack â€” trust it",
],
template: { label: "Universal Recursion Template", code: RECURSION_TEMPLATE },
problems: [
{
name: "Factorial",
tag: "Starter",
why: "The 'Hello World' of recursion. factorial(n) = n * factorial(n-1).",
pattern: "f(n) = n * f(n-1), base: f(0) = 1",
link: "https://leetcode.com/problems/factorial-trailing-zeroes/",
},
{
name: "Fibonacci Number",
tag: "Easy",
why: "Two recursive calls. See why it's slow without memo. Recursion tree visualization.",
pattern: "f(n) = f(n-1) + f(n-2), base: f(0)=0, f(1)=1",
link: "https://leetcode.com/problems/fibonacci-number/",
},
{
name: "Power of Two",
tag: "Easy",
why: "Divide problem in half. isPowerOfTwo(n) = isPowerOfTwo(n/2). Base: n==1.",
pattern: "f(n) = f(n/2), base: n==1 â†’ true, n%2!=0 â†’ false",
link: "https://leetcode.com/problems/power-of-two/",
},
{
name: "Reverse String",
tag: "Easy",
why: "Swap ends, recurse on middle. In-place recursion with two pointers.",
pattern: "swap(s[lo], s[hi]), recurse(lo+1, hi-1)",
link: "https://leetcode.com/problems/reverse-string/",
},
{
name: "Sum of Digits (Digit Sum)",
tag: "Starter",
why: "f(n) = n%10 + f(n//10). Classic shrink-by-one recursion.",
pattern: "f(n) = (n%10) + f(n//10), base: n<10", link: "https://leetcode.com/problems/sum-of-digits-in-base-k/" , }, ],
    }, { id: 2, title: "Phase 2 â€” Array & String Recursion" , subtitle: "Shrink the array by one or split in half." ,
    color: "#34d399" , bg: "#01130a" , steps: [ "Shrink: solve(arr[1:]) or solve(arr, n-1)"
    , "Process current element, recurse on rest" , "Base: empty array or single element"
    , "Two styles: head recursion vs tail recursion" , ], problems: [ { name: "Check if Array is Sorted" , tag: "Easy" ,
    why: "isSorted(arr, i) = arr[i]<=arr[i+1] && isSorted(arr, i+1). Recursion over index." ,
    pattern: "f(i) = arr[i]<=arr[i+1] && f(i+1), base: i==n-1" ,
    link: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/" , }, { name: "Find Maximum in Array" ,
    tag: "Easy" , why: "max(arr) = max(arr[0], max(arr[1:])). Reduce by one each step." ,
    pattern: "f(arr, n) = max(arr[n-1], f(arr, n-1))" ,
    link: "https://leetcode.com/problems/find-the-maximum-sum-of-node-values/" , }, { name: "Palindrome Check" ,
    tag: "Easy" , why: "isPalindrome(s, lo, hi): check ends, recurse inward." ,
    pattern: "s[lo]==s[hi] && isPalindrome(lo+1, hi-1)" , link: "https://leetcode.com/problems/valid-palindrome/" , }, {
    name: "Binary Search (Recursive)" , tag: "Easy" ,
    why: "Classic divide: search left or right half. Teaches logarithmic recursion." ,
    pattern: "f(lo, hi): mid = (lo+hi)//2, recurse left or right" , link: "https://leetcode.com/problems/binary-search/"
    , }, { name: "Merge Sort" , tag: "Medium" ,
    why: "Divide array in half, sort each, merge. Canonical divide-and-conquer." ,
    pattern: "divide â†’ sort left â†’ sort right â†’ merge" , link: "https://leetcode.com/problems/sort-an-array/" , },
    ], }, { id: 3, title: "Phase 3 â€” Tree Recursion" ,
    subtitle: "Recurse on left child, recurse on right child, combine." , color: "#f97316" , bg: "#120800" , steps:
    [ "Base case: node is null â†’ return 0 / null / False" , "Recurse: left = dfs(node.left), right = dfs(node.right)"
    , "Combine: build answer from node.val + left + right" , "Think: what does dfs() return? Define clearly." , ],
    template: { label: "Tree DFS Template" , code: TREE_TEMPLATE }, problems: [ { name: "Maximum Depth of Binary Tree" ,
    tag: "Easy" , why: "depth = 1 + max(left, right). Perfect intro â€” the combine step is trivial." ,
    pattern: "return 1 + max(dfs(left), dfs(right))" ,
    link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" , }, { name: "Invert Binary Tree" , tag: "Easy"
    , why: "Swap left and right, recurse both. Beautiful minimal recursion." ,
    pattern: "swap(node.left, node.right); recurse both" , link: "https://leetcode.com/problems/invert-binary-tree/" ,
    }, { name: "Same Tree" , tag: "Easy" ,
    why: "p and q are same if: values match AND left subtrees same AND right subtrees same." ,
    pattern: "p.val==q.val && sameTree(left) && sameTree(right)" , link: "https://leetcode.com/problems/same-tree/" , },
    { name: "Path Sum" , tag: "Easy" , why: "Pass remaining target down. At leaf, check if target == node.val." ,
    pattern: "recurse with (target - node.val), check at leaf" , link: "https://leetcode.com/problems/path-sum/" , }, {
    name: "Diameter of Binary Tree" , tag: "Easy" ,
    why: "DFS returns depth; diameter tracked globally. Classic 'side effect in recursion'." ,
    pattern: "dfs returns depth; ans = max(ans, left+right)" ,
    link: "https://leetcode.com/problems/diameter-of-binary-tree/" , }, { name: "Binary Tree Maximum Path Sum" ,
    tag: "Hard" , why: "dfs returns max gain through node; answer updated inside. Advanced combine logic." ,
    pattern: "gain = node.val + max(0,left) + max(0,right); return node.val + max side" ,
    link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" , }, ], }, { id: 4,
    title: "Phase 4 â€” Divide & Conquer" , subtitle: "Split problem, solve halves, merge results." , color: "#38bdf8" ,
    bg: "#01101a" , steps: [ "DIVIDE: split input (usually at midpoint)" , "CONQUER: recurse on each half independently"
    , "COMBINE: merge results from both halves" , "Time complexity: T(n) = 2T(n/2) + O(merge)" , ], template: {
    label: "Divide & Conquer Template" , code: DIVCONQ_TEMPLATE }, problems: [ { name: "Maximum Subarray (D&C version)"
    , tag: "Medium" , why: "Answer is in left half, right half, or crosses midpoint. Classic 3-case merge." ,
    pattern: "max(left_max, right_max, cross_max)" , link: "https://leetcode.com/problems/maximum-subarray/" , }, {
    name: "Kth Largest Element (Quickselect)" , tag: "Medium" ,
    why: "Partition around pivot. Only recurse into one half. Average O(n)." ,
    pattern: "partition, recurse only on side containing kth element" ,
    link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" , }, {
    name: "Count of Smaller Numbers After Self" , tag: "Hard" ,
    why: "Merge sort variant. Count inversions during merge step." ,
    pattern: "merge sort + count during merge when right < left" ,
    link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" , }, {
    name: "Different Ways to Add Parentheses" , tag: "Medium" ,
    why: "Split at each operator. Combine left results Ã— right results. Pure D&C." ,
    pattern: "for each operator: recurse left, recurse right, combine all pairs" ,
    link: "https://leetcode.com/problems/different-ways-to-add-parentheses/" , }, ], }, { id: 5,
    title: "Phase 5 â€” Backtracking" , subtitle: "Choose â†’ Explore â†’ Unchoose. Try all, prune bad paths." ,
    color: "#fb923c" , bg: "#130800" , steps: [ "Choose: add to current path / make a decision"
    , "Explore: recurse deeper with updated state" , "Unchoose: remove from path (undo the choice)"
    , "Prune: skip invalid choices early" , ], template: { label: "Backtracking Template" , code: BACKTRACK_TEMPLATE },
    problems: [ { name: "Subsets" , tag: "Medium" ,
    why: "Include or exclude each element. First backtracking problem to learn." ,
    pattern: "at index i: branch into [include i, skip i], recurse" , link: "https://leetcode.com/problems/subsets/" ,
    }, { name: "Permutations" , tag: "Medium" , why: "All orderings. used[] array to track what's chosen. Classic." ,
    pattern: "pick any unused element, mark used, recurse, unmark" , link: "https://leetcode.com/problems/permutations/"
    , }, { name: "Combination Sum" , tag: "Medium" , why: "Same element can repeat. Prune when sum > target." ,
    pattern: "recurse from same index (reuse), prune sum > target" ,
    link: "https://leetcode.com/problems/combination-sum/" , }, { name: "Letter Combinations of a Phone Number" ,
    tag: "Medium" , why: "Implicit choices from digitâ†’letters map. Systematic branching." ,
    pattern: "for each letter at digit[i]: add, recurse(i+1), remove" ,
    link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" , }, { name: "Word Search" ,
    tag: "Medium" , why: "Grid DFS + backtracking. Mark visited in-place, unmark on return." ,
    pattern: "dfs(r,c,i): mark visited, recurse 4 dirs, unmark" , link: "https://leetcode.com/problems/word-search/" ,
    }, { name: "Sudoku Solver" , tag: "Hard" , why: "Constraint backtracking. Skip invalid placements immediately." ,
    pattern: "try digits 1-9, validate, recurse, undo if no solution" ,
    link: "https://leetcode.com/problems/sudoku-solver/" , }, { name: "N-Queens" , tag: "Hard" ,
    why: "Track column + diagonal sets. Place row by row. Classic constraint pruning." ,
    pattern: "row by row, track cols/diags, prune conflicts" , link: "https://leetcode.com/problems/n-queens/" , }, ],
    }, { id: 6, title: "Phase 6 â€” Advanced Recursion" ,
    subtitle: "Multiple recursive calls, mutual recursion, complex state." , color: "#f472b6" , bg: "#130010" , steps:
    [ "Multiple subproblems at each step" , "Pass extra state (index, running value, bounds)"
    , "Mutual recursion: f() calls g(), g() calls f()" , "Memoize overlapping subproblems â†’ DP" , ], problems: [ {
    name: "Generate Parentheses" , tag: "Medium" ,
    why: "State = (open count, close count). Prune when open > n or close > open." ,
    pattern: "recurse with (open, close) counts, add '(' or ')' based on validity" ,
    link: "https://leetcode.com/problems/generate-parentheses/" , }, { name: "Decode Ways" , tag: "Medium" ,
    why: "At each index: take 1 digit or 2 digits. Overlapping â†’ add memo." ,
    pattern: "f(i) = f(i+1) [1-digit] + f(i+2) [2-digit if valid]" , link: "https://leetcode.com/problems/decode-ways/"
    , }, { name: "Expression Add Operators" , tag: "Hard" ,
    why: "Pass current value + last multiplied term. Handle * correctly." ,
    pattern: "recurse with (index, current_eval, last_term) for operator precedence" ,
    link: "https://leetcode.com/problems/expression-add-operators/" , }, { name: "Regular Expression Matching" ,
    tag: "Hard" , why: "Two pointers on (s, p). Star case branches: use char or skip pattern." ,
    pattern: "f(i,j): match char or handle '*' with two branches" ,
    link: "https://leetcode.com/problems/regular-expression-matching/" , }, { name: "Flatten Nested List Iterator" ,
    tag: "Medium" , why: "Recursive structure mirrors the data. Recursion over nested lists." ,
    pattern: "if integer return, else recurse into each nested list" ,
    link: "https://leetcode.com/problems/flatten-nested-list-iterator/" , }, ], }, ]; const tagStyle=(tag)=> {
    const map = {
    Starter: { bg: "#78350f33", color: "#fde68a", border: "#78350f" },
    Easy: { bg: "#14532d33", color: "#86efac", border: "#14532d" },
    Medium: { bg: "#1e3a5f33", color: "#93c5fd", border: "#1e3a5f" },
    Hard: { bg: "#7f1d1d33", color: "#fca5a5", border: "#7f1d1d" },
    };
    return map[tag] || map["Medium"];
    };

    function CodeBlock({ code, color }) {
    const [copied, setCopied] = useState(false);
    return (
    <div style={{ position: "relative" , marginBottom: "0.5rem" }}>
        <pre style={{ background: "#060a12" , border: `1px solid ${color}33`, borderRadius: 8, padding: "0.85rem 1rem" ,
            fontSize: "0.7rem" , lineHeight: 1.75, color: "#cbd5e1" , overflowX: "auto" , margin: 0,
            fontFamily: "'Courier New', monospace" , }}>
        {code}
      </pre>
        <button onClick={()=> { navigator.clipboard?.writeText(code); setCopied(true); setTimeout(() =>
            setCopied(false), 1500); }}
            style={{
            position: "absolute", top: 8, right: 8,
            background: color + "22", border: `1px solid ${color}44`,
            borderRadius: 5, color, fontSize: "0.63rem",
            padding: "2px 8px", cursor: "pointer", fontFamily: "monospace",
            }}
            >
            {copied ? "âœ“ copied" : "copy"}
        </button>
    </div>
    );
    }

    export default function RecursionRoadmap() {
    const [expanded, setExpanded] = useState({});
    const [completed, setCompleted] = useState({});
    const [openTemplate, setOpenTemplate] = useState({});

    const totalProblems = phases.reduce((a, p) => a + p.problems.length, 0);
    const doneCount = Object.values(completed).filter(Boolean).length;

    const toggle = (key) => setExpanded(p => ({ ...p, [key]: !p[key] }));
    const toggleDone = (key, e) => { e.stopPropagation(); setCompleted(p => ({ ...p, [key]: !p[key] })); };
    const toggleTpl = (id) => setOpenTemplate(p => ({ ...p, [id]: !p[id] }));

    return (
    <div style={{ background: "#06080f" , minHeight: "100vh" , fontFamily: "'Courier New', monospace" ,
        padding: "2rem 1rem" , color: "#e2e8f0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>

            {/* Header */}
            <div style={{ textAlign: "center" , marginBottom: "2rem" }}>
                <div style={{ fontSize: "0.63rem" , letterSpacing: "0.35em" , color: "#475569" , marginBottom: "0.4rem"
                    , textTransform: "uppercase" }}>
                    Complete Learning System
                </div>
                <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif" , fontSize: "clamp(2rem, 5vw, 3rem)" ,
                    fontWeight: 900, letterSpacing: "-0.03em" , color: "#f1f5f9" , margin: "0 0 0.3rem 0" }}>
                    Recursion Roadmap
                </h1>
                <p style={{ color: "#64748b" , fontSize: "0.82rem" , margin: 0 }}>
                    6 phases Â· {totalProblems} problems Â· mindset â†’ mastery
                </p>
            </div>

            {/* Progress */}
            <div style={{ marginBottom: "1.6rem" }}>
                <div style={{ background: "#1e293b" , borderRadius: 99, height: 6, overflow: "hidden" }}>
                    <div style={{ height: "100%" , width: `${(doneCount / totalProblems) * 100}%`,
                        background: "linear-gradient(90deg, #a78bfa, #f472b6)" , borderRadius: 99,
                        transition: "width 0.4s ease" , boxShadow: "0 0 10px #a78bfa55" , }} />
                </div>
                <div style={{ fontSize: "0.68rem" , color: "#475569" , marginTop: "0.3rem" , textAlign: "right" }}>
                    {doneCount} / {totalProblems} solved
                </div>
            </div>

            {/* The 3 Laws Box */}
            <div style={{ background: "#0d0820" , border: "1px solid #a78bfa33" , borderLeft: "4px solid #a78bfa" ,
                borderRadius: 10, padding: "1.1rem 1.4rem" , marginBottom: "1.3rem" , }}>
                <div style={{ fontSize: "0.63rem" , letterSpacing: "0.2em" , color: "#a78bfa" , marginBottom: "0.7rem"
                    }}>
                    THE 3 LAWS OF RECURSION (apply to every problem)
                </div>
                {[
                ["1. Base Case", "Must have at least one case that returns without recursing."],
                ["2. Progress", "Every recursive call must move toward the base case."],
                ["3. Trust", "Assume the recursive call works correctly â€” don't trace it."],
                ].map(([k, v]) => (
                <div key={k} style={{ display: "flex" , gap: "0.8rem" , marginBottom: "0.4rem" }}>
                    <span style={{ color: "#a78bfa" , fontWeight: 700, minWidth: 100, fontSize: "0.75rem" }}>{k}</span>
                    <span style={{ color: "#94a3b8" , fontSize: "0.75rem" , lineHeight: 1.5 }}>{v}</span>
                </div>
                ))}
            </div>

            {/* 5-Step Method */}
            <div style={{ background: "#060a12" , border: "1px solid #1e293b" , borderLeft: "4px solid #34d399" ,
                borderRadius: 10, padding: "1rem 1.4rem" , marginBottom: "1.6rem" , }}>
                <div style={{ fontSize: "0.63rem" , letterSpacing: "0.2em" , color: "#34d399" , marginBottom: "0.6rem"
                    }}>
                    HOW TO APPROACH ANY RECURSION PROBLEM
                </div>
                {[
                ["1. Define", "What does this function return? Write it in English."],
                ["2. Base", "What's the smallest input? Return directly."],
                ["3. Shrink", "How do you make the problem smaller? (n-1, half, subtree)"],
                ["4. Trust", "Assume recursion on smaller input works. Use its result."],
                ["5. Combine", "Use current element + recursive result to build the answer."],
                ].map(([k, v]) => (
                <div key={k} style={{ display: "flex" , gap: "0.8rem" , marginBottom: "0.35rem" }}>
                    <span style={{ color: "#34d399" , fontWeight: 700, minWidth: 80, fontSize: "0.75rem" }}>{k}</span>
                    <span style={{ color: "#94a3b8" , fontSize: "0.75rem" , lineHeight: 1.5 }}>{v}</span>
                </div>
                ))}
            </div>

            {/* Phases */}
            {phases.map((phase, pi) => (
            <div key={phase.id} style={{ marginBottom: "1.8rem" }}>
                {/* Phase header */}
                <div style={{ background: phase.bg, border: `1px solid ${phase.color}22`, borderLeft: `4px solid
                    ${phase.color}`, borderRadius: "10px 10px 0 0" , padding: "0.9rem 1.3rem" , }}>
                    <div style={{ display: "flex" , alignItems: "center" , gap: "0.7rem" , flexWrap: "wrap" }}>
                        <span style={{ background: phase.color + "18" , color: phase.color, border: `1px solid
                            ${phase.color}33`, borderRadius: 5, padding: "2px 9px" , fontSize: "0.63rem" , fontWeight:
                            700, letterSpacing: "0.1em" , }}>
                            PHASE {phase.id}
                        </span>
                        <span style={{ fontWeight: 700, fontSize: "0.95rem" , color: "#f1f5f9" }}>{phase.title}</span>
                    </div>
                    <p style={{ color: "#94a3b8" , fontSize: "0.78rem" , margin: "0.35rem 0 0.7rem" }}>{phase.subtitle}
                    </p>

                    {/* Steps grid */}
                    <div style={{ display: "grid" , gridTemplateColumns: "repeat(auto-fit, minmax(185px, 1fr))" ,
                        gap: "0.35rem" , marginBottom: phase.template ? "0.8rem" : 0 }}>
                        {phase.steps.map((s, i) => (
                        <div key={i} style={{ fontSize: "0.69rem" , color: "#cbd5e1" , background: "#ffffff08" ,
                            borderRadius: 5, padding: "3px 9px" , display: "flex" , gap: "0.4rem" ,
                            alignItems: "flex-start" , }}>
                            <span style={{ color: phase.color, fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                            {s}
                        </div>
                        ))}
                    </div>

                    {/* Template toggle inside phase */}
                    {phase.template && (
                    <div>
                        <button onClick={()=> toggleTpl(phase.id)}
                            style={{
                            background: openTemplate[phase.id] ? phase.color + "18" : "transparent",
                            border: `1px solid ${phase.color}${openTemplate[phase.id] ? "55" : "22"}`,
                            borderRadius: 6, color: phase.color,
                            cursor: "pointer", fontFamily: "monospace",
                            fontSize: "0.7rem", padding: "3px 10px",
                            letterSpacing: "0.04em",
                            }}
                            >
                            {openTemplate[phase.id] ? "â–² hide" : "â–¼ show"} template
                        </button>
                        {openTemplate[phase.id] && (
                        <div style={{ marginTop: "0.6rem" }}>
                            <CodeBlock code={phase.template.code} color={phase.color} />
                        </div>
                        )}
                    </div>
                    )}
                </div>

                {/* Problems */}
                <div style={{ border: `1px solid ${phase.color}22`, borderTop: "none" , borderRadius: "0 0 10px 10px" ,
                    overflow: "hidden" }}>
                    {phase.problems.map((prob, idx) => {
                    const key = `${pi}-${idx}`;
                    const isOpen = expanded[key];
                    const isDone = completed[key];
                    const ts = tagStyle(prob.tag);
                    return (
                    <div key={idx} style={{ borderTop: idx> 0 ? "1px solid #0d1117" : "none",
                        background: isDone ? "#080f08" : "#080c14",
                        }}>
                        <div onClick={()=> toggle(key)}
                            style={{ display: "flex", alignItems: "center", gap: "0.7rem", padding: "0.72rem 1.1rem",
                            cursor: "pointer", userSelect: "none" }}
                            >
                            <button onClick={(e)=> toggleDone(key, e)}
                                style={{
                                width: 18, height: 18, borderRadius: 4, flexShrink: 0,
                                border: `2px solid ${isDone ? phase.color : "#334155"}`,
                                background: isDone ? phase.color : "transparent",
                                cursor: "pointer", display: "flex", alignItems: "center",
                                justifyContent: "center", color: "#000", fontWeight: 900, fontSize: 10,
                                }}
                                >
                                {isDone ? "âœ“" : ""}
                            </button>

                            <span style={{ fontSize: "0.84rem" , fontWeight: 600, flex: 1, color: isDone ? phase.color
                                : "#e2e8f0" , textDecoration: isDone ? "line-through" : "none" , textDecorationColor:
                                phase.color + "88" , }}>
                                {prob.name}
                            </span>

                            <span style={{ fontSize: "0.6rem" , fontWeight: 700, padding: "2px 7px" , borderRadius: 99,
                                border: `1px solid ${ts.border}`, background: ts.bg, color: ts.color,
                                letterSpacing: "0.07em" , }}>
                                {prob.tag}
                            </span>
                            <span style={{ color: "#334155" , fontSize: "0.68rem" }}>{isOpen ? "â–²" : "â–¼"}</span>
                        </div>

                        {isOpen && (
                        <div style={{ padding: "0 1.1rem 0.85rem 3rem" , display: "flex" , flexDirection: "column" ,
                            gap: "0.4rem" }}>
                            <p style={{ color: "#94a3b8" , fontSize: "0.77rem" , margin: 0, lineHeight: 1.65 }}>
                                <span style={{ color: "#475569" , fontWeight: 700 }}>WHY: </span>{prob.why}
                            </p>
                            <div style={{ background: "#040710" , border: `1px solid ${phase.color}22`, borderRadius: 6,
                                padding: "0.38rem 0.8rem" , fontSize: "0.71rem" , color: phase.color,
                                fontFamily: "monospace" , }}>
                                <span style={{ color: "#334155" }}>pattern: </span>{prob.pattern}
                            </div>
                            <a href={prob.link} target="_blank" rel="noreferrer" onClick={(e)=> e.stopPropagation()}
                                style={{ fontSize: "0.71rem", color: "#60a5fa", textDecoration: "none" }}>
                                â†’ Solve on LeetCode
                            </a>
                        </div>
                        )}
                    </div>
                    );
                    })}
                </div>
            </div>
            ))}

            {/* Recursion â†’ DP bridge */}
            <div style={{ background: "#0a0d18" , border: "1px solid #1e293b" , borderLeft: "4px solid #60a5fa" ,
                borderRadius: 10, padding: "1.1rem 1.4rem" , marginBottom: "1rem" , }}>
                <div style={{ fontSize: "0.63rem" , letterSpacing: "0.2em" , color: "#60a5fa" , marginBottom: "0.7rem"
                    }}>
                    THE PATH FORWARD â€” RECURSION â†’ DP
                </div>
                {[
                ["Recursion", "Solve by breaking into subproblems. May repeat work."],
                ["+ Memoization", "Cache results of subproblems â†’ Top-down DP."],
                ["â†’ Tabulation", "Fill dp[] bottom-up. Eliminate call stack â†’ Bottom-up DP."],
                ["â†’ Space Optimize", "Realize you only need last 1-2 rows. O(n) â†’ O(1)."],
                ].map(([k, v]) => (
                <div key={k} style={{ display: "flex" , gap: "0.8rem" , marginBottom: "0.38rem" ,
                    alignItems: "flex-start" }}>
                    <span style={{ color: "#60a5fa" , fontWeight: 700, minWidth: 115, fontSize: "0.74rem" , flexShrink:
                        0 }}>{k}</span>
                    <span style={{ color: "#94a3b8" , fontSize: "0.74rem" , lineHeight: 1.5 }}>{v}</span>
                </div>
                ))}
            </div>

            <div style={{ textAlign: "center" , marginTop: "1rem" }}>
                <p style={{ color: "#334155" , fontSize: "0.7rem" }}>
                    ðŸ’¡ Every DP problem starts as a recursion problem. Master recursion first â€” DP follows
                    naturally.
                </p>
            </div>
        </div>
    </div>
    );
    }