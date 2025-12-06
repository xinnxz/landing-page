import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { c as cn } from "./AnimatedBackground.DwSx3jGh.js";
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;
const DialogOverlay = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, { ref, className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props }));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxs(DialogPortal, { "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\ui\\\\dialog.tsx", "data-source-line-start": "34", "data-source-line-end": "50", children: [
  /* @__PURE__ */ jsx(DialogOverlay, { "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\ui\\\\dialog.tsx", "data-source-line-start": "35", "data-source-line-end": "35" }),
  /* @__PURE__ */ jsxs(DialogPrimitive.Content, { ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className), ...props, children: [
    children,
    /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
      /* @__PURE__ */ jsx(X, { className: "h-4 w-4", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\ui\\\\dialog.tsx", "data-source-line-start": "46", "data-source-line-end": "46" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\ui\\\\dialog.tsx", "data-source-line-start": "47", "data-source-line-end": "47", children: "Close" })
    ] })
  ] })
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props, "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\ui\\\\dialog.tsx", "data-source-line-start": "58", "data-source-line-end": "64" });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, { ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props }));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
export {
  Dialog as D,
  DialogContent as a,
  DialogHeader as b,
  DialogTitle as c,
  DialogClose as d
};
