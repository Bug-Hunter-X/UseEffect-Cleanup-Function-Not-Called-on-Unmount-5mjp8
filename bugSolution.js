```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldCleanup, setShouldCleanup] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous operation
    const timeoutId = setTimeout(() => {
      console.log('Async operation complete');
    }, 500);

    return () => {
      if (shouldCleanup) {
        clearTimeout(timeoutId);
        console.log('Cleanup running');
      }
    };
  }, [shouldCleanup]);

  const handleUnmount = () => {
    setShouldCleanup(false);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleUnmount}>Unmount</button>
    </div>
  );
}
```