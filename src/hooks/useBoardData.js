import { useState, useEffect } from "react";
import { useUser } from "../components/context/userContext";
import { getAllProfiles } from "../services/communityService";
export function useBoardData() {
  const { user } = useUser();

  //filters hooks
  const [profilesList, setList] = useState([]);
  const [searchResults, setSearch] = useState([]);
  const [userRole, setUserRole] = useState("");

  //features hooks
  const [breed, setBreed] = useState("");
  const [size, setSize] = useState("");
  const [energy, setEnergy] = useState("");
  const [behaves, setBehaves] = useState("");
  const [pottyTraining, setPottyTraining] = useState("");
  const [chill, setChill] = useState("");
  const [expand, setExpand] = useState("");

  //map hooks
  const [viewport, setViewport] = useState({
    longitude: -0.12624,
    latitude: 51.50015,
    width: "80vw",
    height: "40vh",
    zoom: 10,
  });
  const mapStyle = "mapbox://styles/nubivagant/ckhg4igin14hf19kzu7hspq52";

  useEffect(() => {
    getAllProfiles()
      .then(({ profilesList }) => {
        setList(profilesList);
        setSearch(profilesList);
      })
      .catch((error) => console.log(error));
  }, []);

  //handle the search bar
  const handleSearch = (value) => {
    const results = profilesList.filter((profile) => {
      return Object.values(profile).some(
        (values) =>
          console.log(values) ||
          values.toString().toLowerCase().includes(value.toLowerCase())
      );
    });
    setSearch(results);
  };

  //filters by user role
  const filterRole = (newUserRole) => setUserRole(newUserRole);

  //filters by dog features
  const filterFeatures = (
    size,
    energy,
    behaves,
    pottyTraining,
    chill,
    breed
  ) => {
    setBreed(breed);
    setSize(size);
    setEnergy(energy);
    setBehaves(behaves);
    setPottyTraining(pottyTraining);
    setChill(chill);
  };

  //expands filters card
  const readMore = (e) => {
    e.preventDefault();
    setExpand(!expand);
  };
  //reset all filters
  const resetFilters = (e) => {
    e.preventDefault();
    setSearch(profilesList);
    setBreed("");
    setSize("");
    setEnergy("");
    setBehaves("");
    setPottyTraining("");
    setChill("");
    setUserRole("");
  };

  //variable controls profiles showed on the board - checks if any filter is applied
  let profilesToShow = searchResults.filter((profile) => {
    const isNotCurrUser = profile.username !== user.username;
    const isUserRole = !userRole || userRole === profile.userRole;
    const isSize =
      !size ||
      profile.features.size.toLowerCase().trim() === size.toLowerCase().trim();
    const isEnergy =
      !energy ||
      profile.features.energy.toLowerCase().trim() ===
        energy.toLowerCase().trim();
    const isBehaves =
      !behaves ||
      profile.features.behaves.toLowerCase().trim() ===
        behaves.toLowerCase().trim();
    const isPottyTraining =
      !pottyTraining ||
      profile.features.pottyTraining.toLowerCase().trim() ===
        pottyTraining.toLowerCase().trim();
    const isChill =
      !chill ||
      profile.features.chill.toLowerCase().trim() ===
        chill.toLowerCase().trim();
    const isBreed =
      !breed ||
      profile.features.breed.toLowerCase().trim() ===
        breed.toLowerCase().trim();
    return (
      isNotCurrUser &&
      isUserRole &&
      isSize &&
      isEnergy &&
      isBehaves &&
      isPottyTraining &&
      isChill &&
      isBreed
    );
  });

  return {
    filterRole,
    handleSearch,
    expand,
    readMore,
    filterFeatures,
    profilesToShow,
    viewport,
    setViewport,
    mapStyle,
    setSearch,
    resetFilters,
  };
}
