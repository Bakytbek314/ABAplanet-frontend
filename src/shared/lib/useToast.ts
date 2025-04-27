export const useToast = (toast: any, severity: string, summary: string, detail: string, life: number = 3000 ) => {
    toast.current?.show({
        severity,
        summary,
        detail,
        life,
      });
}