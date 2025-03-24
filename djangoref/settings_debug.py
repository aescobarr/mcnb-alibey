try:
    import debugpy

    if not debugpy.is_client_connected():
        try:
            debugpy.listen(("0.0.0.0", 5678))
            print("Waiting for debugger to attach...")
        except RuntimeError:
            print("Debugger is already listening. Skipping setup.")
except ModuleNotFoundError as m:
    print("Debugpy not installed")