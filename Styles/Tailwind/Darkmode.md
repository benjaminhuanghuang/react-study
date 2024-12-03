
## 1. Enable Dark Mode in Tailwind Configuration
"media": Enables dark mode based on the user’s system preference.
If a user has their operating system (OS) or browser set to "Dark Mode," Tailwind will detect this preference using the prefers-color-scheme media query, and automatically apply any dark: classes. Conversely, if the user’s system preference is set to "Light Mode," it will ignore the dark: classes.

"class": Enables dark mode when a specific class (e.g., dark) is added to the html or body tag.


## Add Dark mode classes to elements
You can now use dark: variants in your Tailwind CSS classes, and they’ll only activate if the user’s system preference is set to dark mode:

```html
<div class="bg-white text-black dark:bg-gray-900 dark:text-white p-6">
  <p>This text and background will automatically change based on system preferences.</p>
</div>
```
In this example:

When the user's system is set to light mode, the bg-white and text-black styles are applied.
When the user's system is set to dark mode, the dark:bg-gray-900 and dark:text-white styles are applied.

## 3. Toggle dark mode 
```js
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};
```