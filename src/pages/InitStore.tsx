import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SyncIcon from "@mui/icons-material/Sync";
import { useCreateStoreMutation } from "../store/services/store";
import { useNavigate } from "react-router-dom";
import InitAccountMenu from "../components/InitAccountMenu";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { setStores } from "../store/slices/stores";
type Inputs = {
  store_name: string;
  store_tagline: string;
  store_description: string;
  owner_id: string;
};

const InitStore = () => {
  const user = useSelector((state: RootState) => state.user);
  const stores = useSelector((state: RootState) => state.stores);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createStore, results] = useCreateStoreMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createStore({ ...data, owner_id: user?.uid });
  };
  React.useEffect(() => {
    if (user !== null && stores.length > 0) {
      navigate(`/admin/${stores[0].store_name}/home`);
    }
  }, [user]);
  React.useEffect(() => {
    !results.isLoading &&
      results.isSuccess &&
      dispatch(setStores(results.data?.stores));
    !results.isLoading && results.isSuccess && navigate(results.data?.redirect);
  }, [results.data]);
  return (
    <main className="p-4 pt-12 sm:pt-24 flex flex-col w-full h-screen">
      <div className="flex items-center m-auto my-0 justify-between w-full sm:w-3/5">
        <h1 className="text-xl font-bold ">Create Store</h1>
        <InitAccountMenu displayName={user?.displayName} user={user} />
      </div>
      <div className="flex items-center mt-20 sm:mt-24 lg:mt-28 justify-center overflow-y-auto w-full">
        <div className="w-full max-w-md space-y-8">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="space-y-4 rounded-md shadow-sm">
              <div className="">
                <label htmlFor="store_name" className="sr-only">
                  Store Name
                </label>
                <input
                  {...register("store_name", {
                    required: true,
                  })}
                  id="store_name"
                  name="store_name"
                  type="text"
                  required
                  className="relative p-3 block w-full rounded-t-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Store Name"
                />
              </div>
              <div className="">
                <label htmlFor="tagline" className="sr-only">
                  Store tagline
                </label>
                <input
                  {...register("store_tagline")}
                  id="store_tagline"
                  name="store_tagline"
                  type="text"
                  autoComplete="store_tagline"
                  defaultValue=""
                  className="relative p-3 block w-full rounded-b-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder=" Store tagline"
                />
              </div>
              <div>
                <label htmlFor="tagline" className="sr-only">
                  Store Description
                </label>
                <textarea
                  {...register("store_description")}
                  id="store_description"
                  name="store_description"
                  defaultValue=""
                  className="relative p-3 block w-full rounded-b-md border-0  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Store description"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3  font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {results.isLoading ? (
                  <SyncIcon className="animate-spin" />
                ) : (
                  " Complete Store Setup"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default InitStore;
