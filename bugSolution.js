```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: This runs only once on mount
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
```