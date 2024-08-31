# Elements as props tips and tricks

```tsx
const DialogBox = ({ mainContent, footerContent }) =>{
    return (
        <DialogBoxContainer>
            <DialogContent>
                {mainContent}
            </DialogContent>
            <DialogFooter>
                { footerContent}
            </DialogFooter>
        </DialogBoxContainer>
    );
};



//Footer with just a single button
<DialogBox mainContent={<AForm />} footerContent={<Submit />} />
//Footer with two buttons
<DialogBox mainContent={<AForm />} footerContent={<> <Submit /> <Cancel /> </>} />
```

## Conditional render
```tsx
    const App () => {
        const [isDialogVisible, setIsDialogVisible] = useState(false);
        // Is this going to render everytime the App component renders?
        const dialogFooter = <Footer />
        return isDialogVisible? <DialogBox footerContent={dialogFooter} /> : null;
    }


    const DialogBox = ({ mainContent, footerContent }) =>{
    return (
        <DialogBoxContainer>
           // Only pass in the element want to render
            <DialogContent>
                {mainContent}
            </DialogContent>
            <DialogFooter>
                { footerContent}
            </DialogFooter>
        </DialogBoxContainer>
    );
};

```