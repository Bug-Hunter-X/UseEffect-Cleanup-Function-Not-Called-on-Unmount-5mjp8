# React useEffect Cleanup Function Not Called on Unmount
This repository demonstrates a scenario where the cleanup function in a React `useEffect` hook might not be called if the component unmounts before the next render.  This is an uncommon edge case and can be tricky to debug.

## Problem
The `useEffect` hook's cleanup function is designed to run before the next effect or component unmount.  However, if the component is unmounted very quickly (e.g., in a rapid navigation or state change), the cleanup function might be skipped.

## Solution
The issue described is complex and there's no simple fix that works in all cases. The best solution is to ensure your cleanup functions are idempotent – meaning they can be called multiple times without causing issues. 