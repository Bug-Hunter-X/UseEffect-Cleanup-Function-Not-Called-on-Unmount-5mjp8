```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including the initial render
    console.log('Effect running');
    return () => {
      // Cleanup function, runs before the next effect or unmount
      console.log('Cleanup running');
    };
  }, []); // Empty dependency array: effect runs only once on mount

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```